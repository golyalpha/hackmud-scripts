function (context, args) { // target:#s.some.npc
  var g = {},
    r, f, l
  var l_num = 0
  var lib = #fs.scripts.lib()

  function c() {
    r = args.target.call(g);
    f = r.split('\n')[l_num];
    l = r.split('\n').pop();
  }
  var EZ = ['open', 'release', 'unlock']
  var prime = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59,
    61, 67, 71, 73, 79, 83, 89, 97
  ]
  var colors = ["red", "purple", "blue", "cyan", "green", "lime", "yellow",
    "orange"
  ]
  var complimentary = ["green", "lime", "yellow", "orange", "red", "purple",
    "blue", "cyan"
  ]
  var triad_1 = ["cyan", "green", "lime", "yellow", "orange", "red", "purple",
    "blue"
  ]
  var triad_2 = ["lime", "yellow", "orange", "red", "purple", "blue", "cyan",
    "green"
  ]
  c()
  if (f.includes("Please disconnect immediately.")) l_num = 1
  while (true) {
    if (l == "Connection terminated.") return {
      ok: true,
      "msg": g
    }
    if (l.includes('EZ_21')) {
      for (var i = 0; i < EZ.length; ++i) {
        g["ez_21"] = EZ[i]
        c()
        if (!lib.is_def(f) || !f.includes('LOCK_ERROR')) {
          l_num = l_num + 1
          break
        }
      }
    }
    if (l.includes('EZ_35')) {
      for (var i = 0; i < EZ.length; ++i) {
        g["ez_35"] = EZ[i]
        c()
        if (l.includes('unlock parameter')) {
          break;
        }
      }
      for (var i = 0; i < 10; i++) {
        g["digit"] = i;
        c()
        if (!lib.is_def(f) || !f.includes("LOCK_ERROR")) {
          l_num = l_num + 1
          break;
        }
      }
    }
    if (l.includes('EZ_40')) {
      for (var i = 0; i < EZ.length; ++i) {
        g["ez_40"] = EZ[i]
        c()
        if (l.includes('unlock parameter')) {
          break;
        }
      }
      for (var i = 0; i < prime.length; i++) {
        g["ez_prime"] = prime[i];
        c()
        if (!lib.is_def(f) || !f.includes("LOCK_ERROR")) {
          l_num = l_num + 1
          break;
        }
      }
    }
    if (l.includes('c001')) {
      for (var i = 0; i < colors.length; i++) {
        g["c001"] = colors[i];
        g["color_digit"] = colors[i].length
        c()
        if (!lib.is_def(f) || !f.includes("LOCK_ERROR")) {
          l_num = l_num + 1
          break;
        }
      }
    }
    if (l.includes('c002')) {
      for (var i = 0; i < colors.length; i++) {
        g["c002"] = colors[i]
        g["c002_complement"] = complimentary[i]
        c()
        if (!lib.is_def(f) || !f.includes("LOCK_ERROR")) {
          l_num = l_num + 1
          break;
        }
      }
    }
    if (l.includes('c003')) {
      for (var i = 0; i < colors.length; i++) {
        g["c003"] = colors[i]
        g["c003_triad_1"] = triad_1[i]
        g["c003_triad_2"] = triad_2[i]
        c()
        if (!lib.is_def(f) || !f.includes("LOCK_ERROR")) {
          l_num = l_num + 1
          break;
        }
      }
    }
    if (l.includes('l0cket')) {
      return {
        ok: false,
        "msg": "Not implemented. Here's what we have: " + JSON.stringify(g)
      }
    }
  }
}
