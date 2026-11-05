// 서랍식 글 목록 + 이미지 단어 (PC는 호버, 터치는 그 자리에서 펼치기)
(function () {
  'use strict';

  var IMAGE_LINK = /\.(webp|png|jpe?g|gif|avif|svg)$/i;
  var canHover = window.matchMedia('(hover: hover) and (pointer: fine)');
  var lastPointer = canHover.matches ? 'mouse' : 'touch';

  document.addEventListener('pointerdown', function (e) {
    lastPointer = e.pointerType || lastPointer;
  }, true);

  /* ---------- 글 서랍 ---------- */

  function setEntry(entry, open) {
    var button = entry.querySelector('.entry-toggle');
    entry.classList.toggle('is-open', open);
    button.setAttribute('aria-expanded', String(open));
  }

  function initEntries() {
    var entries = document.querySelectorAll('.entry');
    if (!entries.length) return;

    entries.forEach(function (entry) {
      entry.querySelector('.entry-toggle').addEventListener('click', function () {
        var open = !entry.classList.contains('is-open');
        setEntry(entry, open);
        var url = location.pathname + location.search + (open ? '#' + entry.id : '');
        history.replaceState(null, '', url);
      });
    });

    var id = decodeURIComponent(location.hash.slice(1));
    var target = id && document.getElementById(id);
    if (target && target.classList.contains('entry')) {
      setEntry(target, true);
      target.scrollIntoView({ block: 'start' });
    }
  }

  /* ---------- 이미지 단어 ---------- */

  var floatBox = null;
  var pinned = null;

  function getFloat() {
    if (!floatBox) {
      floatBox = document.createElement('figure');
      floatBox.className = 'img-float';
      floatBox.setAttribute('aria-hidden', 'true');
      floatBox.appendChild(document.createElement('img'));
      document.body.appendChild(floatBox);
    }
    return floatBox;
  }

  function showFloat(word) {
    var box = getFloat();
    var img = box.firstChild;
    if (img.getAttribute('src') !== word.href) {
      img.src = word.href;
      img.alt = '';
    }
    var r = word.getBoundingClientRect();
    var gap = 6;
    box.style.left = '0px';
    box.style.top = '0px';
    box.classList.add('is-visible');

    function place() {
      var w = box.offsetWidth;
      var h = box.offsetHeight;
      var left = Math.min(r.left, document.documentElement.clientWidth - w - 8);
      var top = r.bottom + gap;
      if (top + h > window.innerHeight && r.top - gap - h > 0) top = r.top - gap - h;
      box.style.left = Math.max(8, left) + window.scrollX + 'px';
      box.style.top = top + window.scrollY + 'px';
    }
    place();
    if (!img.complete) img.onload = place;
  }

  function hideFloat() {
    if (floatBox) floatBox.classList.remove('is-visible');
  }

  function unpin() {
    if (pinned) pinned.classList.remove('is-pinned');
    pinned = null;
    hideFloat();
  }

  function toggleDrawer(word) {
    var drawer = word.nextElementSibling;
    if (!drawer || !drawer.classList.contains('img-drawer')) {
      drawer = document.createElement('span');
      drawer.className = 'img-drawer';
      var inner = document.createElement('span');
      var img = document.createElement('img');
      img.src = word.href;
      img.alt = word.textContent;
      inner.appendChild(img);
      drawer.appendChild(inner);
      word.after(drawer);
      void drawer.offsetHeight; // 펼침 애니메이션 시작점
    }
    var open = !drawer.classList.contains('is-open');
    drawer.classList.toggle('is-open', open);
    word.setAttribute('aria-expanded', String(open));
  }

  function initImageWords() {
    document.querySelectorAll('.prose a[href]').forEach(function (a) {
      var url;
      try { url = new URL(a.href); } catch (e) { return; }
      if (!IMAGE_LINK.test(url.pathname) || a.querySelector('img')) return;

      a.classList.add('img-word');
      a.removeAttribute('target');
      a.setAttribute('aria-expanded', 'false');

      a.addEventListener('mouseenter', function () {
        if (lastPointer === 'mouse' && !pinned) showFloat(a);
      });
      a.addEventListener('mouseleave', function () {
        if (!pinned) hideFloat();
      });
      a.addEventListener('focus', function () {
        if (canHover.matches && !pinned) showFloat(a);
      });
      a.addEventListener('blur', function () {
        if (!pinned) hideFloat();
      });
      a.addEventListener('click', function (e) {
        if (e.metaKey || e.ctrlKey || e.shiftKey) return; // 새 탭으로 원본 열기
        e.preventDefault();
        if (lastPointer === 'mouse') {
          // PC: 클릭하면 고정, 다시 클릭하면 해제
          if (pinned === a) { unpin(); return; }
          unpin();
          pinned = a;
          a.classList.add('is-pinned');
          showFloat(a);
        } else {
          toggleDrawer(a);
        }
      });
    });

    document.addEventListener('click', function (e) {
      if (pinned && !e.target.closest('.img-word')) unpin();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') unpin();
    });
    window.addEventListener('resize', unpin);
  }

  initEntries();
  initImageWords();
})();
