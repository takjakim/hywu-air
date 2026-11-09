(function () {
  // 모바일 메뉴 열고 닫기
  var btn = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // 메인 입학 정보 상자: 탭 전환
  var box = document.querySelector('[data-tabs]');
  if (box) {
    var tabs = box.querySelectorAll('[role="tab"]');
    tabs.forEach(function (t) {
      t.addEventListener('click', function () {
        tabs.forEach(function (x) {
          var on = x === t;
          x.setAttribute('aria-selected', on ? 'true' : 'false');
          x.tabIndex = on ? 0 : -1;
          document.getElementById(x.getAttribute('aria-controls')).hidden = !on;
        });
      });
    });
    // 수시1차 / 수시2차 전환
    var seg = box.querySelectorAll('[data-round]');
    seg.forEach(function (b) {
      b.addEventListener('click', function () {
        seg.forEach(function (x) { x.classList.toggle('on', x === b); });
        box.querySelectorAll('[data-round-panel]').forEach(function (p) {
          p.classList.toggle('on', p.getAttribute('data-round-panel') === b.getAttribute('data-round'));
        });
      });
    });
    // 원서접수 남은 날짜 표시
    var now = new Date();
    box.querySelectorAll('[data-round-panel]').forEach(function (p) {
      var s = new Date(p.getAttribute('data-start'));
      var e = new Date(p.getAttribute('data-end'));
      var el = p.querySelector('[data-status]');
      if (!el || isNaN(s) || isNaN(e)) return;
      if (now < s) {
        var d = Math.ceil((new Date(s.toDateString()) - new Date(now.toDateString())) / 86400000);
        el.textContent = '접수 시작 D-' + d;
      } else if (now <= e) {
        el.textContent = '지금 접수 중';
      } else {
        el.textContent = '접수 마감';
      }
    });
  }

  // 소식 분류 필터
  var filter = document.querySelector('.filter');
  if (filter) {
    filter.addEventListener('click', function (e) {
      var b = e.target.closest('button');
      if (!b) return;
      filter.querySelectorAll('button').forEach(function (x) { x.classList.toggle('on', x === b); });
      var f = b.getAttribute('data-filter');
      document.querySelectorAll('.post-item').forEach(function (it) {
        it.classList.toggle('hide', f !== 'all' && it.getAttribute('data-cat') !== f);
      });
    });
  }
})();
