// Authentic, lightweight, self-contained Lottie animations (no external CDN or assets required)

export const developerLottie = {
  v: "5.7.4",
  fr: 30,
  ip: 0,
  op: 60,
  w: 120,
  h: 120,
  nm: "Developer Pulse",
  ddd: 0,
  assets: [],
  layers: [
    // Outer rotating tech ring
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Ring",
      sr: 1,
      ks: {
        o: { a: 1, k: [{ t: 0, s: [30] }, { t: 30, s: [80] }, { t: 60, s: [30] }] },
        r: { a: 1, k: [{ t: 0, s: [0] }, { t: 60, s: [360] }] },
        p: { a: 0, k: [60, 60, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 1, k: [{ t: 0, s: [90, 90, 100] }, { t: 30, s: [105, 105, 100] }, { t: 60, s: [90, 90, 100] }] }
      },
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "el",
              s: { a: 0, k: [80, 80] },
              p: { a: 0, k: [0, 0] }
            },
            {
              ty: "st",
              c: { a: 0, k: [1, 0.42, 0, 1] }, // Orange #ff6b00
              w: { a: 0, k: 3 },
              d: [
                { n: "d", v: { a: 0, k: 12 } },
                { n: "g", v: { a: 0, k: 8 } }
              ]
            },
            { ty: "tr", p: { a: 0, k: [0, 0] }, r: { a: 0, k: 0 }, s: { a: 0, k: [100, 100] }, o: { a: 0, k: 100 } }
          ]
        }
      ]
    },
    // Center Code Brackets < / >
    {
      ddd: 0,
      ind: 2,
      ty: 4,
      nm: "CodeBrackets",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [60, 60, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 1, k: [{ t: 0, s: [100, 100, 100] }, { t: 30, s: [112, 112, 100] }, { t: 60, s: [100, 100, 100] }] }
      },
      shapes: [
        // Left bracket <
        {
          ty: "gr",
          it: [
            {
              ty: "sh",
              ks: {
                a: 0,
                k: {
                  c: false,
                  i: [[0, 0], [0, 0], [0, 0]],
                  o: [[0, 0], [0, 0], [0, 0]],
                  v: [[-12, -14], [-24, 0], [-12, 14]]
                }
              }
            },
            {
              ty: "st",
              c: { a: 0, k: [1, 0.72, 0, 1] }, // Amber #ffb800
              w: { a: 0, k: 3.5 },
              lc: 2,
              lj: 2
            },
            { ty: "tr", p: { a: 0, k: [0, 0] }, r: { a: 0, k: 0 }, s: { a: 0, k: [100, 100] }, o: { a: 0, k: 100 } }
          ]
        },
        // Slash /
        {
          ty: "gr",
          it: [
            {
              ty: "sh",
              ks: {
                a: 0,
                k: {
                  c: false,
                  i: [[0, 0], [0, 0]],
                  o: [[0, 0], [0, 0]],
                  v: [[6, -16], [-6, 16]]
                }
              }
            },
            {
              ty: "st",
              c: { a: 0, k: [1, 0.42, 0, 1] }, // Orange
              w: { a: 0, k: 3 },
              lc: 2
            },
            { ty: "tr", p: { a: 0, k: [0, 0] }, r: { a: 0, k: 0 }, s: { a: 0, k: [100, 100] }, o: { a: 0, k: 100 } }
          ]
        },
        // Right bracket >
        {
          ty: "gr",
          it: [
            {
              ty: "sh",
              ks: {
                a: 0,
                k: {
                  c: false,
                  i: [[0, 0], [0, 0], [0, 0]],
                  o: [[0, 0], [0, 0], [0, 0]],
                  v: [[12, -14], [24, 0], [12, 14]]
                }
              }
            },
            {
              ty: "st",
              c: { a: 0, k: [1, 0.72, 0, 1] }, // Amber
              w: { a: 0, k: 3.5 },
              lc: 2,
              lj: 2
            },
            { ty: "tr", p: { a: 0, k: [0, 0] }, r: { a: 0, k: 0 }, s: { a: 0, k: [100, 100] }, o: { a: 0, k: 100 } }
          ]
        }
      ]
    }
  ]
};

export const trophyLottie = {
  v: "5.7.4",
  fr: 30,
  ip: 0,
  op: 60,
  w: 120,
  h: 120,
  nm: "Trophy Shimmer",
  ddd: 0,
  assets: [],
  layers: [
    // Pulsing Star / Medal Crown
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "MedalStar",
      sr: 1,
      ks: {
        o: { a: 1, k: [{ t: 0, s: [85] }, { t: 30, s: [100] }, { t: 60, s: [85] }] },
        r: { a: 1, k: [{ t: 0, s: [-5] }, { t: 30, s: [5] }, { t: 60, s: [-5] }] },
        p: { a: 0, k: [60, 60, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 1, k: [{ t: 0, s: [95, 95, 100] }, { t: 30, s: [108, 108, 100] }, { t: 60, s: [95, 95, 100] }] }
      },
      shapes: [
        {
          ty: "gr",
          it: [
            // Cup body
            {
              ty: "sh",
              ks: {
                a: 0,
                k: {
                  c: true,
                  i: [[0, 0], [0, 10], [10, 0], [0, 0]],
                  o: [[0, 0], [-10, 0], [0, 10], [0, 0]],
                  v: [[-18, -18], [-14, 8], [14, 8], [18, -18]]
                }
              }
            },
            {
              ty: "fl",
              c: { a: 0, k: [1, 0.78, 0.15, 1] } // Bright Gold
            },
            {
              ty: "st",
              c: { a: 0, k: [1, 0.95, 0.6, 1] },
              w: { a: 0, k: 2 }
            },
            { ty: "tr", p: { a: 0, k: [0, 0] }, r: { a: 0, k: 0 }, s: { a: 0, k: [100, 100] }, o: { a: 0, k: 100 } }
          ]
        },
        // Stem and Base
        {
          ty: "gr",
          it: [
            {
              ty: "rc",
              p: { a: 0, k: [0, 16] },
              s: { a: 0, k: [6, 12] },
              r: { a: 0, k: 0 }
            },
            {
              ty: "rc",
              p: { a: 0, k: [0, 24] },
              s: { a: 0, k: [26, 6] },
              r: { a: 0, k: 2 }
            },
            {
              ty: "fl",
              c: { a: 0, k: [0.95, 0.6, 0.1, 1] }
            },
            { ty: "tr", p: { a: 0, k: [0, 0] }, r: { a: 0, k: 0 }, s: { a: 0, k: [100, 100] }, o: { a: 0, k: 100 } }
          ]
        }
      ]
    }
  ]
};

export const scrollLottie = {
  v: "5.7.4",
  fr: 30,
  ip: 0,
  op: 60,
  w: 60,
  h: 90,
  nm: "Scroll Indicator",
  ddd: 0,
  assets: [],
  layers: [
    // Mouse border
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Mouse",
      sr: 1,
      ks: {
        o: { a: 0, k: 80 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [30, 45, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] }
      },
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "rc",
              p: { a: 0, k: [0, 0] },
              s: { a: 0, k: [26, 42] },
              r: { a: 0, k: 13 }
            },
            {
              ty: "st",
              c: { a: 0, k: [1, 0.42, 0, 0.8] },
              w: { a: 0, k: 2 }
            },
            { ty: "tr", p: { a: 0, k: [0, 0] }, r: { a: 0, k: 0 }, s: { a: 0, k: [100, 100] }, o: { a: 0, k: 100 } }
          ]
        }
      ]
    },
    // Scrolling wheel dot
    {
      ddd: 0,
      ind: 2,
      ty: 4,
      nm: "WheelDot",
      sr: 1,
      ks: {
        o: {
          a: 1,
          k: [
            { t: 0, s: [0] },
            { t: 15, s: [100] },
            { t: 45, s: [100] },
            { t: 60, s: [0] }
          ]
        },
        r: { a: 0, k: 0 },
        p: {
          a: 1,
          k: [
            { t: 0, s: [30, 36, 0] },
            { t: 55, s: [30, 52, 0] }
          ]
        },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] }
      },
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "el",
              s: { a: 0, k: [6, 6] },
              p: { a: 0, k: [0, 0] }
            },
            {
              ty: "fl",
              c: { a: 0, k: [1, 0.72, 0, 1] }
            },
            { ty: "tr", p: { a: 0, k: [0, 0] }, r: { a: 0, k: 0 }, s: { a: 0, k: [100, 100] }, o: { a: 0, k: 100 } }
          ]
        }
      ]
    }
  ]
};
