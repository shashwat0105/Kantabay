const client = require("../configs/db");

exports.addNote = (req, res) => {
  const { heading, content } = req.body;
  client
    .query(
      `INSERT INTO notes (email, heading, content) VALUES ('${req.email}', '${heading}' , '${content}');`
    )
    .then((data) => {
      res.status(200).json({
        message: "Note added successfully",
      });
    })
    .catch((err) => {
      console.log(erro);
      res.status(400).json({
        message: "DB error occured",
      });
    });
};
const { Client } = require("pg");

const client = new Client(process.env.DB_URL);

module.exports = client;
{
  "name": "web-project-backend",
  "version": "1.0.0",
  "lockfileVersion": 1,
  "requires": true,
  "dependencies": {
    "@mapbox/node-pre-gyp": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/@mapbox/node-pre-gyp/-/node-pre-gyp-1.0.5.tgz",
      "integrity": "sha512-4srsKPXWlIxp5Vbqz5uLfBN+du2fJChBoYn/f2h991WLdk7jUvcSk/McVLSv/X+xQIPI8eGD5GjrnygdyHnhPA==",
      "requires": {
        "detect-libc": "^1.0.3",
        "https-proxy-agent": "^5.0.0",
        "make-dir": "^3.1.0",
        "node-fetch": "^2.6.1",
        "nopt": "^5.0.0",
        "npmlog": "^4.1.2",
        "rimraf": "^3.0.2",
        "semver": "^7.3.4",
        "tar": "^6.1.0"
      },
      "dependencies": {
        "nopt": {
          "version": "5.0.0",
          "resolved": "https://registry.npmjs.org/nopt/-/nopt-5.0.0.tgz",
          "integrity": "sha512-Tbj67rffqceeLpcRXrT7vKAN8CwfPeIBgM7E6iBkmKLV7bEMwpGgYLGv0jACUsECaa/vuxP0IjEont6umdMgtQ==",
          "requires": {
            "abbrev": "1"
          }
        },
        "semver": {
          "version": "7.3.5",
          "resolved": "https://registry.npmjs.org/semver/-/semver-7.3.5.tgz",
          "integrity": "sha512-PoeGJYh8HK4BTO/a9Tf6ZG3veo/A7ZVsYrSA6J8ny9nb3B1VrpkuN+z9OE5wfE5p6H4LchYZsegiQgbJD94ZFQ==",
          "requires": {
            "lru-cache": "^6.0.0"
          }
        }
      }
    },
    "@sindresorhus/is": {
      "version": "0.14.0",
      "resolved": "https://registry.npmjs.org/@sindresorhus/is/-/is-0.14.0.tgz",
      "integrity": "sha512-9NET910DNaIPngYnLLPeg+Ogzqsi9uM4mSboU5y6p8S5DzMTVEsJZrawi+BoDNUVBa2DhJqQYUFvMDfgU062LQ=="
    },
    "@szmarczak/http-timer": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/@szmarczak/http-timer/-/http-timer-1.1.2.tgz",
      "integrity": "sha512-XIB2XbzHTN6ieIjfIMV9hlVcfPU26s2vafYWQcZHWXHOxiaRZYEDKEwdl129Zyg50+foYV2jCgtrqSA6qNuNSA==",
      "requires": {
        "defer-to-connect": "^1.0.1"
      }
    },
    "abbrev": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
      "integrity": "sha512-nne9/IiQ/hzIhY6pdDnbBtz7DjPTKrY00P/zvPSm5pOFkl6xuGrGnXn/VtTNNfNtAfZ9/1RtehkszU9qcTii0Q=="
    },
    "accepts": {
      "version": "1.3.7",
      "resolved": "https://registry.npmjs.org/accepts/-/accepts-1.3.7.tgz",
      "integrity": "sha512-Il80Qs2WjYlJIBNzNkK6KYqlVMTbZLXgHx2oT0pU/fjRHyEp+PEfEPY0R3WCwAGVOtauxh1hOxNgIf5bv7dQpA==",
      "requires": {
        "mime-types": "~2.1.24",
        "negotiator": "0.6.2"
      }
    },
    "agent-base": {
      "version": "6.0.2",
      "resolved": "https://registry.npmjs.org/agent-base/-/agent-base-6.0.2.tgz",
      "integrity": "sha512-RZNwNclF7+MS/8bDg70amg32dyeZGZxiDuQmZxKLAlQjr3jGyLx+4Kkk58UO7D2QdgFIQCovuSuZESne6RG6XQ==",
      "requires": {
        "debug": "4"
      },
      "dependencies": {
        "debug": {
          "version": "4.3.1",
          "resolved": "https://registry.npmjs.org/debug/-/debug-4.3.1.tgz",
          "integrity": "sha512-doEwdvm4PCeK4K3RQN2ZC2BYUBaxwLARCqZmMjtF8a51J2Rb0xpVloFRnCODwqjpwnAoao4pelN8l3RJdv3gRQ==",
          "requires": {
            "ms": "2.1.2"
          }
        },
        "ms": {
          "version": "2.1.2",
          "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
          "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w=="
        }
      }
    },
    "ansi-align": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/ansi-align/-/ansi-align-3.0.0.tgz",
      "integrity": "sha512-ZpClVKqXN3RGBmKibdfWzqCY4lnjEuoNzU5T0oEFpfd/z5qJHVarukridD4juLO2FXMiwUQxr9WqQtaYa8XRYw==",
      "requires": {
        "string-width": "^3.0.0"
      },
      "dependencies": {
        "string-width": {
          "version": "3.1.0",
          "resolved": "https://registry.npmjs.org/string-width/-/string-width-3.1.0.tgz",
          "integrity": "sha512-vafcv6KjVZKSgz06oM/H6GDBrAtz8vdhQakGjFIvNrHA6y3HCF1CInLy+QLq8dTJPQ1b+KDUqDFctkdRW44e1w==",
          "requires": {
            "emoji-regex": "^7.0.1",
            "is-fullwidth-code-point": "^2.0.0",
            "strip-ansi": "^5.1.0"
          }
        }
      }
    },
    "ansi-regex": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-4.1.0.tgz",
      "integrity": "sha512-1apePfXM1UOSqw0o9IiFAovVz9M5S1Dg+4TrDwfMewQ6p/rmMueb7tWZjQ1rx4Loy1ArBggoqGpfqqdI4rondg=="
    },
    "ansi-styles": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
      "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
      "requires": {
        "color-convert": "^2.0.1"
      }
    },
    "anymatch": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/anymatch/-/anymatch-3.1.2.tgz",
      "integrity": "sha512-P43ePfOAIupkguHUycrc4qJ9kz8ZiuOUijaETwX7THt0Y/GNK7v0aa8rY816xWjZ7rJdA5XdMcpVFTKMq+RvWg==",
      "requires": {
        "normalize-path": "^3.0.0",
        "picomatch": "^2.0.4"
      }
    },
    "aproba": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/aproba/-/aproba-1.2.0.tgz",
      "integrity": "sha512-Y9J6ZjXtoYh8RnXVCMOU/ttDmk1aBjunq9vO0ta5x85WDQiQfUF9sIPBITdbiiIVcBo03Hi3jMxigBtsddlXRw=="
    },
    "are-we-there-yet": {
      "version": "1.1.5",
      "resolved": "https://registry.npmjs.org/are-we-there-yet/-/are-we-there-yet-1.1.5.tgz",
      "integrity": "sha512-5hYdAkZlcG8tOLujVDTgCT+uPX0VnpAH28gWsLfzpXYm7wP6mp5Q/gYyR7YQ0cKVJcXJnl3j2kpBan13PtQf6w==",
      "requires": {
        "delegates": "^1.0.0",
        "readable-stream": "^2.0.6"
      }
    },
    "array-flatten": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/array-flatten/-/array-flatten-1.1.1.tgz",
      "integrity": "sha1-ml9pkFGx5wczKPKgCJaLZOopVdI="
    },
    "balanced-match": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.2.tgz",
      "integrity": "sha512-3oSeUO0TMV67hN1AmbXsK4yaqU7tjiHlbxRDZOpH0KW9+CeX4bRAaX0Anxt0tx2MrpRpWwQaPwIlISEJhYU5Pw=="
    },
    "bcrypt": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/bcrypt/-/bcrypt-5.0.1.tgz",
      "integrity": "sha512-9BTgmrhZM2t1bNuDtrtIMVSmmxZBrJ71n8Wg+YgdjHuIWYF7SjjmCPZFB+/5i/o/PIeRpwVJR3P+NrpIItUjqw==",
      "requires": {
        "@mapbox/node-pre-gyp": "^1.0.0",
        "node-addon-api": "^3.1.0"
      }
    },
    "binary-extensions": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/binary-extensions/-/binary-extensions-2.2.0.tgz",
      "integrity": "sha512-jDctJ/IVQbZoJykoeHbhXpOlNBqGNcwXJKJog42E5HDPUwQTSdjCHdihjj0DlnheQ7blbT6dHOafNAiS8ooQKA=="
    },
    "body-parser": {
      "version": "1.19.0",
      "resolved": "https://registry.npmjs.org/body-parser/-/body-parser-1.19.0.tgz",
      "integrity": "sha512-dhEPs72UPbDnAQJ9ZKMNTP6ptJaionhP5cBb541nXPlW60Jepo9RV/a4fX4XWW9CuFNK22krhrj1+rgzifNCsw==",
      "requires": {
        "bytes": "3.1.0",
        "content-type": "~1.0.4",
        "debug": "2.6.9",
        "depd": "~1.1.2",
        "http-errors": "1.7.2",
        "iconv-lite": "0.4.24",
        "on-finished": "~2.3.0",
        "qs": "6.7.0",
        "raw-body": "2.4.0",
        "type-is": "~1.6.17"
      }
    },
    "boxen": {
      "version": "4.2.0",
      "resolved": "https://registry.npmjs.org/boxen/-/boxen-4.2.0.tgz",
      "integrity": "sha512-eB4uT9RGzg2odpER62bBwSLvUeGC+WbRjjyyFhGsKnc8wp/m0+hQsMUvUe3H2V0D5vw0nBdO1hCJoZo5mKeuIQ==",
      "requires": {
        "ansi-align": "^3.0.0",
        "camelcase": "^5.3.1",
        "chalk": "^3.0.0",
        "cli-boxes": "^2.2.0",
        "string-width": "^4.1.0",
        "term-size": "^2.1.0",
        "type-fest": "^0.8.1",
        "widest-line": "^3.1.0"
      }
    },
    "brace-expansion": {
      "version": "1.1.11",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",
      "integrity": "sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==",
      "requires": {
        "balanced-match": "^1.0.0",
        "concat-map": "0.0.1"
      }
    },
    "braces": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/braces/-/braces-3.0.2.tgz",
      "integrity": "sha512-b8um+L1RzM3WDSzvhm6gIz1yfTbBt6YTlcEKAvsmqCZZFw46z626lVj9j1yEPW33H5H+lBQpZMP1k8l+78Ha0A==",
      "requires": {
        "fill-range": "^7.0.1"
      }
    },
    "buffer-equal-constant-time": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/buffer-equal-constant-time/-/buffer-equal-constant-time-1.0.1.tgz",
      "integrity": "sha1-+OcRMvf/5uAaXJaXpMbz5I1cyBk="
    },
    "buffer-writer": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/buffer-writer/-/buffer-writer-2.0.0.tgz",
      "integrity": "sha512-a7ZpuTZU1TRtnwyCNW3I5dc0wWNC3VR9S++Ewyk2HHZdrO3CQJqSpd+95Us590V6AL7JqUAH2IwZ/398PmNFgw=="
    },
    "bytes": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/bytes/-/bytes-3.1.0.tgz",
      "integrity": "sha512-zauLjrfCG+xvoyaqLoV8bLVXXNGC4JqlxFCutSDWA6fJrTo2ZuvLYTqZ7aHBLZSMOopbzwv8f+wZcVzfVTI2Dg=="
    },
    "cacheable-request": {
      "version": "6.1.0",
      "resolved": "https://registry.npmjs.org/cacheable-request/-/cacheable-request-6.1.0.tgz",
      "integrity": "sha512-Oj3cAGPCqOZX7Rz64Uny2GYAZNliQSqfbePrgAQ1wKAihYmCUnraBtJtKcGR4xz7wF+LoJC+ssFZvv5BgF9Igg==",
      "requires": {
        "clone-response": "^1.0.2",
        "get-stream": "^5.1.0",
        "http-cache-semantics": "^4.0.0",
        "keyv": "^3.0.0",
        "lowercase-keys": "^2.0.0",
        "normalize-url": "^4.1.0",
        "responselike": "^1.0.2"
      },
      "dependencies": {
        "get-stream": {
          "version": "5.2.0",
          "resolved": "https://registry.npmjs.org/get-stream/-/get-stream-5.2.0.tgz",
          "integrity": "sha512-nBF+F1rAZVCu/p7rjzgA+Yb4lfYXrpl7a6VmJrU8wF9I1CKvP/QwPNZHnOlwbTkY6dvtFIzFMSyQXbLoTQPRpA==",
          "requires": {
            "pump": "^3.0.0"
          }
        },
        "lowercase-keys": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/lowercase-keys/-/lowercase-keys-2.0.0.tgz",
          "integrity": "sha512-tqNXrS78oMOE73NMxK4EMLQsQowWf8jKooH9g7xPavRT706R6bkQJ6DY2Te7QukaZsulxa30wQ7bk0pm4XiHmA=="
        }
      }
    },
    "camelcase": {
      "version": "5.3.1",
      "resolved": "https://registry.npmjs.org/camelcase/-/camelcase-5.3.1.tgz",
      "integrity": "sha512-L28STB170nwWS63UjtlEOE3dldQApaJXZkOI1uMFfzf3rRuPegHaHesyee+YxQ+W6SvRDQV6UrdOdRiR153wJg=="
    },
    "chalk": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-3.0.0.tgz",
      "integrity": "sha512-4D3B6Wf41KOYRFdszmDqMCGq5VV/uMAB273JILmO+3jAlh8X4qDtdtgCR3fxtbLEMzSx22QdhnDcJvu2u1fVwg==",
      "requires": {
        "ansi-styles": "^4.1.0",
        "supports-color": "^7.1.0"
      },
      "dependencies": {
        "has-flag": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
          "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ=="
        },
        "supports-color": {
          "version": "7.2.0",
          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
          "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
          "requires": {
            "has-flag": "^4.0.0"
          }
        }
      }
    },
    "chokidar": {
      "version": "3.5.1",
      "resolved": "https://registry.npmjs.org/chokidar/-/chokidar-3.5.1.tgz",
      "integrity": "sha512-9+s+Od+W0VJJzawDma/gvBNQqkTiqYTWLuZoyAsivsI4AaWTCzHG06/TMjsf1cYe9Cb97UCEhjz7HvnPk2p/tw==",
      "requires": {
        "anymatch": "~3.1.1",
        "braces": "~3.0.2",
        "fsevents": "~2.3.1",
        "glob-parent": "~5.1.0",
        "is-binary-path": "~2.1.0",
        "is-glob": "~4.0.1",
        "normalize-path": "~3.0.0",
        "readdirp": "~3.5.0"
      }
    },
    "chownr": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/chownr/-/chownr-2.0.0.tgz",
      "integrity": "sha512-bIomtDF5KGpdogkLd9VspvFzk9KfpyyGlS8YFVZl7TGPBHL5snIOnxeshwVgPteQ9b4Eydl+pVbIyE1DcvCWgQ=="
    },
    "ci-info": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/ci-info/-/ci-info-2.0.0.tgz",
      "integrity": "sha512-5tK7EtrZ0N+OLFMthtqOj4fI2Jeb88C4CAZPu25LDVUgXJ0A3Js4PMGqrn0JU1W0Mh1/Z8wZzYPxqUrXeBboCQ=="
    },
    "cli-boxes": {
      "version": "2.2.1",
      "resolved": "https://registry.npmjs.org/cli-boxes/-/cli-boxes-2.2.1.tgz",
      "integrity": "sha512-y4coMcylgSCdVinjiDBuR8PCC2bLjyGTwEmPb9NHR/QaNU6EUOXcTY/s6VjGMD6ENSEaeQYHCY0GNGS5jfMwPw=="
    },
    "clone-response": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/clone-response/-/clone-response-1.0.2.tgz",
      "integrity": "sha1-0dyXOSAxTfZ/vrlCI7TuNQI56Ws=",
      "requires": {
        "mimic-response": "^1.0.0"
      }
    },
    "code-point-at": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/code-point-at/-/code-point-at-1.1.0.tgz",
      "integrity": "sha1-DQcLTQQ6W+ozovGkDi7bPZpMz3c="
    },
    "color-convert": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
      "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
      "requires": {
        "color-name": "~1.1.4"
      }
    },
    "color-name": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
      "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="
    },
    "concat-map": {
      "version": "0.0.1",
      "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
      "integrity": "sha1-2Klr13/Wjfd5OnMDajug1UBdR3s="
    },
    "configstore": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/configstore/-/configstore-5.0.1.tgz",
      "integrity": "sha512-aMKprgk5YhBNyH25hj8wGt2+D52Sw1DRRIzqBwLp2Ya9mFmY8KPvvtvmna8SxVR9JMZ4kzMD68N22vlaRpkeFA==",
      "requires": {
        "dot-prop": "^5.2.0",
        "graceful-fs": "^4.1.2",
        "make-dir": "^3.0.0",
        "unique-string": "^2.0.0",
        "write-file-atomic": "^3.0.0",
        "xdg-basedir": "^4.0.0"
      }
    },
    "console-control-strings": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/console-control-strings/-/console-control-strings-1.1.0.tgz",
      "integrity": "sha1-PXz0Rk22RG6mRL9LOVB/mFEAjo4="
    },
    "content-disposition": {
      "version": "0.5.3",
      "resolved": "https://registry.npmjs.org/content-disposition/-/content-disposition-0.5.3.tgz",
      "integrity": "sha512-ExO0774ikEObIAEV9kDo50o+79VCUdEB6n6lzKgGwupcVeRlhrj3qGAfwq8G6uBJjkqLrhT0qEYFcWng8z1z0g==",
      "requires": {
        "safe-buffer": "5.1.2"
      }
    },
    "content-type": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/content-type/-/content-type-1.0.4.tgz",
      "integrity": "sha512-hIP3EEPs8tB9AT1L+NUqtwOAps4mk2Zob89MWXMHjHWg9milF/j4osnnQLXBCBFBk/tvIG/tUc9mOUJiPBhPXA=="
    },
    "cookie": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/cookie/-/cookie-0.4.0.tgz",
      "integrity": "sha512-+Hp8fLp57wnUSt0tY0tHEXh4voZRDnoIrZPqlo3DPiI4y9lwg/jqx+1Om94/W6ZaPDOUbnjOt/99w66zk+l1Xg=="
    },
    "cookie-signature": {
      "version": "1.0.6",
      "resolved": "https://registry.npmjs.org/cookie-signature/-/cookie-signature-1.0.6.tgz",
      "integrity": "sha1-4wOogrNCzD7oylE6eZmXNNqzriw="
    },
    "core-util-is": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/core-util-is/-/core-util-is-1.0.2.tgz",
      "integrity": "sha1-tf1UIgqivFq1eqtxQMlAdUUDwac="
    },
    "cors": {
      "version": "2.8.5",
      "resolved": "https://registry.npmjs.org/cors/-/cors-2.8.5.tgz",
      "integrity": "sha512-KIHbLJqu73RGr/hnbrO9uBeixNGuvSQjul/jdFvS/KFSIH1hWVd1ng7zOHx+YrEfInLG7q4n6GHQ9cDtxv/P6g==",
      "requires": {
        "object-assign": "^4",
        "vary": "^1"
      }
    },
    "crypto-random-string": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/crypto-random-string/-/crypto-random-string-2.0.0.tgz",
      "integrity": "sha512-v1plID3y9r/lPhviJ1wrXpLeyUIGAZ2SHNYTEapm7/8A9nLPoyvVp3RK/EPFqn5kEznyWgYZNsRtYYIWbuG8KA=="
    },
    "debug": {
      "version": "2.6.9",
      "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
      "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
      "requires": {
        "ms": "2.0.0"
      }
    },
    "decompress-response": {
      "version": "3.3.0",
      "resolved": "https://registry.npmjs.org/decompress-response/-/decompress-response-3.3.0.tgz",
      "integrity": "sha1-gKTdMjdIOEv6JICDYirt7Jgq3/M=",
      "requires": {
        "mimic-response": "^1.0.0"
      }
    },
    "deep-extend": {
      "version": "0.6.0",
      "resolved": "https://registry.npmjs.org/deep-extend/-/deep-extend-0.6.0.tgz",
      "integrity": "sha512-LOHxIOaPYdHlJRtCQfDIVZtfw/ufM8+rVj649RIHzcm/vGwQRXFt6OPqIFWsm2XEMrNIEtWR64sY1LEKD2vAOA=="
    },
    "defer-to-connect": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/defer-to-connect/-/defer-to-connect-1.1.3.tgz",
      "integrity": "sha512-0ISdNousHvZT2EiFlZeZAHBUvSxmKswVCEf8hW7KWgG4a8MVEu/3Vb6uWYozkjylyCxe0JBIiRB1jV45S70WVQ=="
    },
    "delegates": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/delegates/-/delegates-1.0.0.tgz",
      "integrity": "sha1-hMbhWbgZBP3KWaDvRM2HDTElD5o="
    },
    "depd": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/depd/-/depd-1.1.2.tgz",
      "integrity": "sha1-m81S4UwJd2PnSbJ0xDRu0uVgtak="
    },
    "destroy": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/destroy/-/destroy-1.0.4.tgz",
      "integrity": "sha1-l4hXRCxEdJ5CBmE+N5RiBYJqvYA="
    },
    "detect-libc": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/detect-libc/-/detect-libc-1.0.3.tgz",
      "integrity": "sha1-+hN8S9aY7fVc1c0CrFWfkaTEups="
    },
    "dot-prop": {
      "version": "5.3.0",
      "resolved": "https://registry.npmjs.org/dot-prop/-/dot-prop-5.3.0.tgz",
      "integrity": "sha512-QM8q3zDe58hqUqjraQOmzZ1LIH9SWQJTlEKCH4kJ2oQvLZk7RbQXvtDM2XEq3fwkV9CCvvH4LA0AV+ogFsBM2Q==",
      "requires": {
        "is-obj": "^2.0.0"
      }
    },
    "dotenv": {
      "version": "9.0.2",
      "resolved": "https://registry.npmjs.org/dotenv/-/dotenv-9.0.2.tgz",
      "integrity": "sha512-I9OvvrHp4pIARv4+x9iuewrWycX6CcZtoAu1XrzPxc5UygMJXJZYmBsynku8IkrJwgypE5DGNjDPmPRhDCptUg=="
    },
    "duplexer3": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/duplexer3/-/duplexer3-0.1.4.tgz",
      "integrity": "sha1-7gHdHKwO08vH/b6jfcCo8c4ALOI="
    },
    "ecdsa-sig-formatter": {
      "version": "1.0.11",
      "resolved": "https://registry.npmjs.org/ecdsa-sig-formatter/-/ecdsa-sig-formatter-1.0.11.tgz",
      "integrity": "sha512-nagl3RYrbNv6kQkeJIpt6NJZy8twLB/2vtz6yN9Z4vRKHN4/QZJIEbqohALSgwKdnksuY3k5Addp5lg8sVoVcQ==",
      "requires": {
        "safe-buffer": "^5.0.1"
      }
    },
    "ee-first": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/ee-first/-/ee-first-1.1.1.tgz",
      "integrity": "sha1-WQxhFWsK4vTwJVcyoViyZrxWsh0="
    },
    "emoji-regex": {
      "version": "7.0.3",
      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-7.0.3.tgz",
      "integrity": "sha512-CwBLREIQ7LvYFB0WyRvwhq5N5qPhc6PMjD6bYggFlI5YyDgl+0vxq5VHbMOFqLg7hfWzmu8T5Z1QofhmTIhItA=="
    },
    "encodeurl": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/encodeurl/-/encodeurl-1.0.2.tgz",
      "integrity": "sha1-rT/0yG7C0CkyL1oCw6mmBslbP1k="
    },
    "end-of-stream": {
      "version": "1.4.4",
      "resolved": "https://registry.npmjs.org/end-of-stream/-/end-of-stream-1.4.4.tgz",
      "integrity": "sha512-+uw1inIHVPQoaVuHzRyXd21icM+cnt4CzD5rW+NC1wjOUSTOs+Te7FOv7AhN7vS9x/oIyhLP5PR1H+phQAHu5Q==",
      "requires": {
        "once": "^1.4.0"
      }
    },
    "escape-goat": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/escape-goat/-/escape-goat-2.1.1.tgz",
      "integrity": "sha512-8/uIhbG12Csjy2JEW7D9pHbreaVaS/OpN3ycnyvElTdwM5n6GY6W6e2IPemfvGZeUMqZ9A/3GqIZMgKnBhAw/Q=="
    },
    "escape-html": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/escape-html/-/escape-html-1.0.3.tgz",
      "integrity": "sha1-Aljq5NPQwJdN4cFpGI7wBR0dGYg="
    },
    "etag": {
      "version": "1.8.1",
      "resolved": "https://registry.npmjs.org/etag/-/etag-1.8.1.tgz",
      "integrity": "sha1-Qa4u62XvpiJorr/qg6x9eSmbCIc="
    },
    "express": {
      "version": "4.17.1",
      "resolved": "https://registry.npmjs.org/express/-/express-4.17.1.tgz",
      "integrity": "sha512-mHJ9O79RqluphRrcw2X/GTh3k9tVv8YcoyY4Kkh4WDMUYKRZUq0h1o0w2rrrxBqM7VoeUVqgb27xlEMXTnYt4g==",
      "requires": {
        "accepts": "~1.3.7",
        "array-flatten": "1.1.1",
        "body-parser": "1.19.0",
        "content-disposition": "0.5.3",
        "content-type": "~1.0.4",
        "cookie": "0.4.0",
        "cookie-signature": "1.0.6",
        "debug": "2.6.9",
        "depd": "~1.1.2",
        "encodeurl": "~1.0.2",
        "escape-html": "~1.0.3",
        "etag": "~1.8.1",
        "finalhandler": "~1.1.2",
        "fresh": "0.5.2",
        "merge-descriptors": "1.0.1",
        "methods": "~1.1.2",
        "on-finished": "~2.3.0",
        "parseurl": "~1.3.3",
        "path-to-regexp": "0.1.7",
        "proxy-addr": "~2.0.5",
        "qs": "6.7.0",
        "range-parser": "~1.2.1",
        "safe-buffer": "5.1.2",
        "send": "0.17.1",
        "serve-static": "1.14.1",
        "setprototypeof": "1.1.1",
        "statuses": "~1.5.0",
        "type-is": "~1.6.18",
        "utils-merge": "1.0.1",
        "vary": "~1.1.2"
      }
    },
    "fill-range": {
      "version": "7.0.1",
      "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-7.0.1.tgz",
      "integrity": "sha512-qOo9F+dMUmC2Lcb4BbVvnKJxTPjCm+RRpe4gDuGrzkL7mEVl/djYSu2OdQ2Pa302N4oqkSg9ir6jaLWJ2USVpQ==",
      "requires": {
        "to-regex-range": "^5.0.1"
      }
    },
    "finalhandler": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/finalhandler/-/finalhandler-1.1.2.tgz",
      "integrity": "sha512-aAWcW57uxVNrQZqFXjITpW3sIUQmHGG3qSb9mUah9MgMC4NeWhNOlNjXEYq3HjRAvL6arUviZGGJsBg6z0zsWA==",
      "requires": {
        "debug": "2.6.9",
        "encodeurl": "~1.0.2",
        "escape-html": "~1.0.3",
        "on-finished": "~2.3.0",
        "parseurl": "~1.3.3",
        "statuses": "~1.5.0",
        "unpipe": "~1.0.0"
      }
    },
    "forwarded": {
      "version": "0.1.2",
      "resolved": "https://registry.npmjs.org/forwarded/-/forwarded-0.1.2.tgz",
      "integrity": "sha1-mMI9qxF1ZXuMBXPozszZGw/xjIQ="
    },
    "fresh": {
      "version": "0.5.2",
      "resolved": "https://registry.npmjs.org/fresh/-/fresh-0.5.2.tgz",
      "integrity": "sha1-PYyt2Q2XZWn6g1qx+OSyOhBWBac="
    },
    "fs-minipass": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/fs-minipass/-/fs-minipass-2.1.0.tgz",
      "integrity": "sha512-V/JgOLFCS+R6Vcq0slCuaeWEdNC3ouDlJMNIsacH2VtALiu9mV4LPrHc5cDl8k5aw6J8jwgWWpiTo5RYhmIzvg==",
      "requires": {
        "minipass": "^3.0.0"
      }
    },
    "fs.realpath": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/fs.realpath/-/fs.realpath-1.0.0.tgz",
      "integrity": "sha1-FQStJSMVjKpA20onh8sBQRmU6k8="
    },
    "fsevents": {
      "version": "2.3.2",
      "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.2.tgz",
      "integrity": "sha512-xiqMQR4xAeHTuB9uWm+fFRcIOgKBMiOBP+eXiyT7jsgVCq1bkVygt00oASowB7EdtpOHaaPgKt812P9ab+DDKA==",
      "optional": true
    },
    "gauge": {
      "version": "2.7.4",
      "resolved": "https://registry.npmjs.org/gauge/-/gauge-2.7.4.tgz",
      "integrity": "sha1-LANAXHU4w51+s3sxcCLjJfsBi/c=",
      "requires": {
        "aproba": "^1.0.3",
        "console-control-strings": "^1.0.0",
        "has-unicode": "^2.0.0",
        "object-assign": "^4.1.0",
        "signal-exit": "^3.0.0",
        "string-width": "^1.0.1",
        "strip-ansi": "^3.0.1",
        "wide-align": "^1.1.0"
      },
      "dependencies": {
        "ansi-regex": {
          "version": "2.1.1",
          "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-2.1.1.tgz",
          "integrity": "sha1-w7M6te42DYbg5ijwRorn7yfWVN8="
        },
        "is-fullwidth-code-point": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-1.0.0.tgz",
          "integrity": "sha1-754xOG8DGn8NZDr4L95QxFfvAMs=",
          "requires": {
            "number-is-nan": "^1.0.0"
          }
        },
        "string-width": {
          "version": "1.0.2",
          "resolved": "https://registry.npmjs.org/string-width/-/string-width-1.0.2.tgz",
          "integrity": "sha1-EYvfW4zcUaKn5w0hHgfisLmxB9M=",
          "requires": {
            "code-point-at": "^1.0.0",
            "is-fullwidth-code-point": "^1.0.0",
            "strip-ansi": "^3.0.0"
          }
        },
        "strip-ansi": {
          "version": "3.0.1",
          "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-3.0.1.tgz",
          "integrity": "sha1-ajhfuIU9lS1f8F0Oiq+UJ43GPc8=",
          "requires": {
            "ansi-regex": "^2.0.0"
          }
        }
      }
    },
    "get-stream": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/get-stream/-/get-stream-4.1.0.tgz",
      "integrity": "sha512-GMat4EJ5161kIy2HevLlr4luNjBgvmj413KaQA7jt4V8B4RDsfpHk7WQ9GVqfYyyx8OS/L66Kox+rJRNklLK7w==",
      "requires": {
        "pump": "^3.0.0"
      }
    },
    "glob": {
      "version": "7.1.7",
      "resolved": "https://registry.npmjs.org/glob/-/glob-7.1.7.tgz",
      "integrity": "sha512-OvD9ENzPLbegENnYP5UUfJIirTg4+XwMWGaQfQTY0JenxNvvIKP3U3/tAQSPIu/lHxXYSZmpXlUHeqAIdKzBLQ==",
      "requires": {
        "fs.realpath": "^1.0.0",
        "inflight": "^1.0.4",
        "inherits": "2",
        "minimatch": "^3.0.4",
        "once": "^1.3.0",
        "path-is-absolute": "^1.0.0"
      }
    },
    "glob-parent": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.2.tgz",
      "integrity": "sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==",
      "requires": {
        "is-glob": "^4.0.1"
      }
    },
    "global-dirs": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/global-dirs/-/global-dirs-2.1.0.tgz",
      "integrity": "sha512-MG6kdOUh/xBnyo9cJFeIKkLEc1AyFq42QTU4XiX51i2NEdxLxLWXIjEjmqKeSuKR7pAZjTqUVoT2b2huxVLgYQ==",
      "requires": {
        "ini": "1.3.7"
      }
    },
    "got": {
      "version": "9.6.0",
      "resolved": "https://registry.npmjs.org/got/-/got-9.6.0.tgz",
      "integrity": "sha512-R7eWptXuGYxwijs0eV+v3o6+XH1IqVK8dJOEecQfTmkncw9AV4dcw/Dhxi8MdlqPthxxpZyizMzyg8RTmEsG+Q==",
      "requires": {
        "@sindresorhus/is": "^0.14.0",
        "@szmarczak/http-timer": "^1.1.2",
        "cacheable-request": "^6.0.0",
        "decompress-response": "^3.3.0",
        "duplexer3": "^0.1.4",
        "get-stream": "^4.1.0",
        "lowercase-keys": "^1.0.1",
        "mimic-response": "^1.0.1",
        "p-cancelable": "^1.0.0",
        "to-readable-stream": "^1.0.0",
        "url-parse-lax": "^3.0.0"
      }
    },
    "graceful-fs": {
      "version": "4.2.6",
      "resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.2.6.tgz",
      "integrity": "sha512-nTnJ528pbqxYanhpDYsi4Rd8MAeaBA67+RZ10CM1m3bTAVFEDcd5AuA4a6W5YkGZ1iNXHzZz8T6TBKLeBuNriQ=="
    },
    "has-flag": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-3.0.0.tgz",
      "integrity": "sha1-tdRU3CGZriJWmfNGfloH87lVuv0="
    },
    "has-unicode": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/has-unicode/-/has-unicode-2.0.1.tgz",
      "integrity": "sha1-4Ob+aijPUROIVeCG0Wkedx3iqLk="
    },
    "has-yarn": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/has-yarn/-/has-yarn-2.1.0.tgz",
      "integrity": "sha512-UqBRqi4ju7T+TqGNdqAO0PaSVGsDGJUBQvk9eUWNGRY1CFGDzYhLWoM7JQEemnlvVcv/YEmc2wNW8BC24EnUsw=="
    },
    "http-cache-semantics": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/http-cache-semantics/-/http-cache-semantics-4.1.0.tgz",
      "integrity": "sha512-carPklcUh7ROWRK7Cv27RPtdhYhUsela/ue5/jKzjegVvXDqM2ILE9Q2BGn9JZJh1g87cp56su/FgQSzcWS8cQ=="
    },
    "http-errors": {
      "version": "1.7.2",
      "resolved": "https://registry.npmjs.org/http-errors/-/http-errors-1.7.2.tgz",
      "integrity": "sha512-uUQBt3H/cSIVfch6i1EuPNy/YsRSOUBXTVfZ+yR7Zjez3qjBz6i9+i4zjNaoqcoFVI4lQJ5plg63TvGfRSDCRg==",
      "requires": {
        "depd": "~1.1.2",
        "inherits": "2.0.3",
        "setprototypeof": "1.1.1",
        "statuses": ">= 1.5.0 < 2",
        "toidentifier": "1.0.0"
      }
    },
    "https-proxy-agent": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/https-proxy-agent/-/https-proxy-agent-5.0.0.tgz",
      "integrity": "sha512-EkYm5BcKUGiduxzSt3Eppko+PiNWNEpa4ySk9vTC6wDsQJW9rHSa+UhGNJoRYp7bz6Ht1eaRIa6QaJqO5rCFbA==",
      "requires": {
        "agent-base": "6",
        "debug": "4"
      },
      "dependencies": {
        "debug": {
          "version": "4.3.1",
          "resolved": "https://registry.npmjs.org/debug/-/debug-4.3.1.tgz",
          "integrity": "sha512-doEwdvm4PCeK4K3RQN2ZC2BYUBaxwLARCqZmMjtF8a51J2Rb0xpVloFRnCODwqjpwnAoao4pelN8l3RJdv3gRQ==",
          "requires": {
            "ms": "2.1.2"
          }
        },
        "ms": {
          "version": "2.1.2",
          "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
          "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w=="
        }
      }
    },
    "iconv-lite": {
      "version": "0.4.24",
      "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.4.24.tgz",
      "integrity": "sha512-v3MXnZAcvnywkTUEZomIActle7RXXeedOR31wwl7VlyoXO4Qi9arvSenNQWne1TcRwhCL1HwLI21bEqdpj8/rA==",
      "requires": {
        "safer-buffer": ">= 2.1.2 < 3"
      }
    },
    "ignore-by-default": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/ignore-by-default/-/ignore-by-default-1.0.1.tgz",
      "integrity": "sha1-SMptcvbGo68Aqa1K5odr44ieKwk="
    },
    "import-lazy": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/import-lazy/-/import-lazy-2.1.0.tgz",
      "integrity": "sha1-BWmOPUXIjo1+nZLLBYTnfwlvPkM="
    },
    "imurmurhash": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/imurmurhash/-/imurmurhash-0.1.4.tgz",
      "integrity": "sha1-khi5srkoojixPcT7a21XbyMUU+o="
    },
    "inflight": {
      "version": "1.0.6",
      "resolved": "https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz",
      "integrity": "sha1-Sb1jMdfQLQwJvJEKEHW6gWW1bfk=",
      "requires": {
        "once": "^1.3.0",
        "wrappy": "1"
      }
    },
    "inherits": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.3.tgz",
      "integrity": "sha1-Yzwsg+PaQqUC9SRmAiSA9CCCYd4="
    },
    "ini": {
      "version": "1.3.7",
      "resolved": "https://registry.npmjs.org/ini/-/ini-1.3.7.tgz",
      "integrity": "sha512-iKpRpXP+CrP2jyrxvg1kMUpXDyRUFDWurxbnVT1vQPx+Wz9uCYsMIqYuSBLV+PAaZG/d7kRLKRFc9oDMsH+mFQ=="
    },
    "ipaddr.js": {
      "version": "1.9.1",
      "resolved": "https://registry.npmjs.org/ipaddr.js/-/ipaddr.js-1.9.1.tgz",
      "integrity": "sha512-0KI/607xoxSToH7GjN1FfSbLoU0+btTicjsQSWQlh/hZykN8KpmMf7uYwPW3R+akZ6R/w18ZlXSHBYXiYUPO3g=="
    },
    "is-binary-path": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/is-binary-path/-/is-binary-path-2.1.0.tgz",
      "integrity": "sha512-ZMERYes6pDydyuGidse7OsHxtbI7WVeUEozgR/g7rd0xUimYNlvZRE/K2MgZTjWy725IfelLeVcEM97mmtRGXw==",
      "requires": {
        "binary-extensions": "^2.0.0"
      }
    },
    "is-ci": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/is-ci/-/is-ci-2.0.0.tgz",
      "integrity": "sha512-YfJT7rkpQB0updsdHLGWrvhBJfcfzNNawYDNIyQXJz0IViGf75O8EBPKSdvw2rF+LGCsX4FZ8tcr3b19LcZq4w==",
      "requires": {
        "ci-info": "^2.0.0"
      }
    },
    "is-extglob": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz",
      "integrity": "sha1-qIwCU1eR8C7TfHahueqXc8gz+MI="
    },
    "is-fullwidth-code-point": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-2.0.0.tgz",
      "integrity": "sha1-o7MKXE8ZkYMWeqq5O+764937ZU8="
    },
    "is-glob": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-4.0.1.tgz",
      "integrity": "sha512-5G0tKtBTFImOqDnLB2hG6Bp2qcKEFduo4tZu9MT/H6NQv/ghhy30o55ufafxJ/LdH79LLs2Kfrn85TLKyA7BUg==",
      "requires": {
        "is-extglob": "^2.1.1"
      }
    },
    "is-installed-globally": {
      "version": "0.3.2",
      "resolved": "https://registry.npmjs.org/is-installed-globally/-/is-installed-globally-0.3.2.tgz",
      "integrity": "sha512-wZ8x1js7Ia0kecP/CHM/3ABkAmujX7WPvQk6uu3Fly/Mk44pySulQpnHG46OMjHGXApINnV4QhY3SWnECO2z5g==",
      "requires": {
        "global-dirs": "^2.0.1",
        "is-path-inside": "^3.0.1"
      }
    },
    "is-npm": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/is-npm/-/is-npm-4.0.0.tgz",
      "integrity": "sha512-96ECIfh9xtDDlPylNPXhzjsykHsMJZ18ASpaWzQyBr4YRTcVjUvzaHayDAES2oU/3KpljhHUjtSRNiDwi0F0ig=="
    },
    "is-number": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/is-number/-/is-number-7.0.0.tgz",
      "integrity": "sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng=="
    },
    "is-obj": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/is-obj/-/is-obj-2.0.0.tgz",
      "integrity": "sha512-drqDG3cbczxxEJRoOXcOjtdp1J/lyp1mNn0xaznRs8+muBhgQcrnbspox5X5fOw0HnMnbfDzvnEMEtqDEJEo8w=="
    },
    "is-path-inside": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/is-path-inside/-/is-path-inside-3.0.3.tgz",
      "integrity": "sha512-Fd4gABb+ycGAmKou8eMftCupSir5lRxqf4aD/vd0cD2qc4HL07OjCeuHMr8Ro4CoMaeCKDB0/ECBOVWjTwUvPQ=="
    },
    "is-typedarray": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/is-typedarray/-/is-typedarray-1.0.0.tgz",
      "integrity": "sha1-5HnICFjfDBsR3dppQPlgEfzaSpo="
    },
    "is-yarn-global": {
      "version": "0.3.0",
      "resolved": "https://registry.npmjs.org/is-yarn-global/-/is-yarn-global-0.3.0.tgz",
      "integrity": "sha512-VjSeb/lHmkoyd8ryPVIKvOCn4D1koMqY+vqyjjUfc3xyKtP4dYOxM44sZrnqQSzSds3xyOrUTLTC9LVCVgLngw=="
    },
    "isarray": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/isarray/-/isarray-1.0.0.tgz",
      "integrity": "sha1-u5NdSFgsuhaMBoNJV6VKPgcSTxE="
    },
    "json-buffer": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/json-buffer/-/json-buffer-3.0.0.tgz",
      "integrity": "sha1-Wx85evx11ne96Lz8Dkfh+aPZqJg="
    },
    "jsonwebtoken": {
      "version": "8.5.1",
      "resolved": "https://registry.npmjs.org/jsonwebtoken/-/jsonwebtoken-8.5.1.tgz",
      "integrity": "sha512-XjwVfRS6jTMsqYs0EsuJ4LGxXV14zQybNd4L2r0UvbVnSF9Af8x7p5MzbJ90Ioz/9TI41/hTCvznF/loiSzn8w==",
      "requires": {
        "jws": "^3.2.2",
        "lodash.includes": "^4.3.0",
        "lodash.isboolean": "^3.0.3",
        "lodash.isinteger": "^4.0.4",
        "lodash.isnumber": "^3.0.3",
        "lodash.isplainobject": "^4.0.6",
        "lodash.isstring": "^4.0.1",
        "lodash.once": "^4.0.0",
        "ms": "^2.1.1",
        "semver": "^5.6.0"
      },
      "dependencies": {
        "ms": {
          "version": "2.1.3",
          "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
          "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA=="
        }
      }
    },
    "jwa": {
      "version": "1.4.1",
      "resolved": "https://registry.npmjs.org/jwa/-/jwa-1.4.1.tgz",
      "integrity": "sha512-qiLX/xhEEFKUAJ6FiBMbes3w9ATzyk5W7Hvzpa/SLYdxNtng+gcurvrI7TbACjIXlsJyr05/S1oUhZrc63evQA==",
      "requires": {
        "buffer-equal-constant-time": "1.0.1",
        "ecdsa-sig-formatter": "1.0.11",
        "safe-buffer": "^5.0.1"
      }
    },
    "jws": {
      "version": "3.2.2",
      "resolved": "https://registry.npmjs.org/jws/-/jws-3.2.2.tgz",
      "integrity": "sha512-YHlZCB6lMTllWDtSPHz/ZXTsi8S00usEV6v1tjq8tOUZzw7DpSDWVXjXDre6ed1w/pd495ODpHZYSdkRTsa0HA==",
      "requires": {
        "jwa": "^1.4.1",
        "safe-buffer": "^5.0.1"
      }
    },
    "keyv": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/keyv/-/keyv-3.1.0.tgz",
      "integrity": "sha512-9ykJ/46SN/9KPM/sichzQ7OvXyGDYKGTaDlKMGCAlg2UK8KRy4jb0d8sFc+0Tt0YYnThq8X2RZgCg74RPxgcVA==",
      "requires": {
        "json-buffer": "3.0.0"
      }
    },
    "latest-version": {
      "version": "5.1.0",
      "resolved": "https://registry.npmjs.org/latest-version/-/latest-version-5.1.0.tgz",
      "integrity": "sha512-weT+r0kTkRQdCdYCNtkMwWXQTMEswKrFBkm4ckQOMVhhqhIMI1UT2hMj+1iigIhgSZm5gTmrRXBNoGUgaTY1xA==",
      "requires": {
        "package-json": "^6.3.0"
      }
    },
    "lodash.includes": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/lodash.includes/-/lodash.includes-4.3.0.tgz",
      "integrity": "sha1-YLuYqHy5I8aMoeUTJUgzFISfVT8="
    },
    "lodash.isboolean": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/lodash.isboolean/-/lodash.isboolean-3.0.3.tgz",
      "integrity": "sha1-bC4XHbKiV82WgC/UOwGyDV9YcPY="
    },
    "lodash.isinteger": {
      "version": "4.0.4",
      "resolved": "https://registry.npmjs.org/lodash.isinteger/-/lodash.isinteger-4.0.4.tgz",
      "integrity": "sha1-YZwK89A/iwTDH1iChAt3sRzWg0M="
    },
    "lodash.isnumber": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/lodash.isnumber/-/lodash.isnumber-3.0.3.tgz",
      "integrity": "sha1-POdoEMWSjQM1IwGsKHMX8RwLH/w="
    },
    "lodash.isplainobject": {
      "version": "4.0.6",
      "resolved": "https://registry.npmjs.org/lodash.isplainobject/-/lodash.isplainobject-4.0.6.tgz",
      "integrity": "sha1-fFJqUtibRcRcxpC4gWO+BJf1UMs="
    },
    "lodash.isstring": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/lodash.isstring/-/lodash.isstring-4.0.1.tgz",
      "integrity": "sha1-1SfftUVuynzJu5XV2ur4i6VKVFE="
    },
    "lodash.once": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/lodash.once/-/lodash.once-4.1.1.tgz",
      "integrity": "sha1-DdOXEhPHxW34gJd9UEyI+0cal6w="
    },
    "lowercase-keys": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/lowercase-keys/-/lowercase-keys-1.0.1.tgz",
      "integrity": "sha512-G2Lj61tXDnVFFOi8VZds+SoQjtQC3dgokKdDG2mTm1tx4m50NUHBOZSBwQQHyy0V12A0JTG4icfZQH+xPyh8VA=="
    },
    "lru-cache": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-6.0.0.tgz",
      "integrity": "sha512-Jo6dJ04CmSjuznwJSS3pUeWmd/H0ffTlkXXgwZi+eq1UCmqQwCh+eLsYOYCwY991i2Fah4h1BEMCx4qThGbsiA==",
      "requires": {
        "yallist": "^4.0.0"
      }
    },
    "make-dir": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/make-dir/-/make-dir-3.1.0.tgz",
      "integrity": "sha512-g3FeP20LNwhALb/6Cz6Dd4F2ngze0jz7tbzrD2wAV+o9FeNHe4rL+yK2md0J/fiSf1sa1ADhXqi5+oVwOM/eGw==",
      "requires": {
        "semver": "^6.0.0"
      },
      "dependencies": {
        "semver": {
          "version": "6.3.0",
          "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
          "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw=="
        }
      }
    },
    "media-typer": {
      "version": "0.3.0",
      "resolved": "https://registry.npmjs.org/media-typer/-/media-typer-0.3.0.tgz",
      "integrity": "sha1-hxDXrwqmJvj/+hzgAWhUUmMlV0g="
    },
    "merge-descriptors": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/merge-descriptors/-/merge-descriptors-1.0.1.tgz",
      "integrity": "sha1-sAqqVW3YtEVoFQ7J0blT8/kMu2E="
    },
    "methods": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/methods/-/methods-1.1.2.tgz",
      "integrity": "sha1-VSmk1nZUE07cxSZmVoNbD4Ua/O4="
    },
    "mime": {
      "version": "1.6.0",
      "resolved": "https://registry.npmjs.org/mime/-/mime-1.6.0.tgz",
      "integrity": "sha512-x0Vn8spI+wuJ1O6S7gnbaQg8Pxh4NNHb7KSINmEWKiPE4RKOplvijn+NkmYmmRgP68mc70j2EbeTFRsrswaQeg=="
    },
    "mime-db": {
      "version": "1.47.0",
      "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.47.0.tgz",
      "integrity": "sha512-QBmA/G2y+IfeS4oktet3qRZ+P5kPhCKRXxXnQEudYqUaEioAU1/Lq2us3D/t1Jfo4hE9REQPrbB7K5sOczJVIw=="
    },
    "mime-types": {
      "version": "2.1.30",
      "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.30.tgz",
      "integrity": "sha512-crmjA4bLtR8m9qLpHvgxSChT+XoSlZi8J4n/aIdn3z92e/U47Z0V/yl+Wh9W046GgFVAmoNR/fmdbZYcSSIUeg==",
      "requires": {
        "mime-db": "1.47.0"
      }
    },
    "mimic-response": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/mimic-response/-/mimic-response-1.0.1.tgz",
      "integrity": "sha512-j5EctnkH7amfV/q5Hgmoal1g2QHFJRraOtmx0JpIqkxhBhI/lJSl1nMpQ45hVarwNETOoWEimndZ4QK0RHxuxQ=="
    },
    "minimatch": {
      "version": "3.0.4",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.0.4.tgz",
      "integrity": "sha512-yJHVQEhyqPLUTgt9B83PXu6W3rx4MvvHvSUvToogpwoGDOUQ+yDrR0HRot+yOCdCO7u4hX3pWft6kWBBcqh0UA==",
      "requires": {
        "brace-expansion": "^1.1.7"
      }
    },
    "minimist": {
      "version": "1.2.5",
      "resolved": "https://registry.npmjs.org/minimist/-/minimist-1.2.5.tgz",
      "integrity": "sha512-FM9nNUYrRBAELZQT3xeZQ7fmMOBg6nWNmJKTcgsJeaLstP/UODVpGsr5OhXhhXg6f+qtJ8uiZ+PUxkDWcgIXLw=="
    },
    "minipass": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/minipass/-/minipass-3.1.3.tgz",
      "integrity": "sha512-Mgd2GdMVzY+x3IJ+oHnVM+KG3lA5c8tnabyJKmHSaG2kAGpudxuOf8ToDkhumF7UzME7DecbQE9uOZhNm7PuJg==",
      "requires": {
        "yallist": "^4.0.0"
      }
    },
    "minizlib": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/minizlib/-/minizlib-2.1.2.tgz",
      "integrity": "sha512-bAxsR8BVfj60DWXHE3u30oHzfl4G7khkSuPW+qvpd7jFRHm7dLxOjUk1EHACJ/hxLY8phGJ0YhYHZo7jil7Qdg==",
      "requires": {
        "minipass": "^3.0.0",
        "yallist": "^4.0.0"
      }
    },
    "mkdirp": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-1.0.4.tgz",
      "integrity": "sha512-vVqVZQyf3WLx2Shd0qJ9xuvqgAyKPLAiqITEtqW0oIUjzo3PePDd6fW9iFz30ef7Ysp/oiWqbhszeGWW2T6Gzw=="
    },
    "ms": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
      "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g="
    },
    "negotiator": {
      "version": "0.6.2",
      "resolved": "https://registry.npmjs.org/negotiator/-/negotiator-0.6.2.tgz",
      "integrity": "sha512-hZXc7K2e+PgeI1eDBe/10Ard4ekbfrrqG8Ep+8Jmf4JID2bNg7NvCPOZN+kfF574pFQI7mum2AUqDidoKqcTOw=="
    },
    "node-addon-api": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/node-addon-api/-/node-addon-api-3.1.0.tgz",
      "integrity": "sha512-flmrDNB06LIl5lywUz7YlNGZH/5p0M7W28k8hzd9Lshtdh1wshD2Y+U4h9LD6KObOy1f+fEVdgprPrEymjM5uw=="
    },
    "node-fetch": {
      "version": "2.6.1",
      "resolved": "https://registry.npmjs.org/node-fetch/-/node-fetch-2.6.1.tgz",
      "integrity": "sha512-V4aYg89jEoVRxRb2fJdAg8FHvI7cEyYdVAh94HH0UIK8oJxUfkjlDQN9RbMx+bEjP7+ggMiFRprSti032Oipxw=="
    },
    "nodemon": {
      "version": "2.0.7",
      "resolved": "https://registry.npmjs.org/nodemon/-/nodemon-2.0.7.tgz",
      "integrity": "sha512-XHzK69Awgnec9UzHr1kc8EomQh4sjTQ8oRf8TsGrSmHDx9/UmiGG9E/mM3BuTfNeFwdNBvrqQq/RHL0xIeyFOA==",
      "requires": {
        "chokidar": "^3.2.2",
        "debug": "^3.2.6",
        "ignore-by-default": "^1.0.1",
        "minimatch": "^3.0.4",
        "pstree.remy": "^1.1.7",
        "semver": "^5.7.1",
        "supports-color": "^5.5.0",
        "touch": "^3.1.0",
        "undefsafe": "^2.0.3",
        "update-notifier": "^4.1.0"
      },
      "dependencies": {
        "debug": {
          "version": "3.2.7",
          "resolved": "https://registry.npmjs.org/debug/-/debug-3.2.7.tgz",
          "integrity": "sha512-CFjzYYAi4ThfiQvizrFQevTTXHtnCqWfe7x1AhgEscTz6ZbLbfoLRLPugTQyBth6f8ZERVUSyWHFD/7Wu4t1XQ==",
          "requires": {
            "ms": "^2.1.1"
          }
        },
        "ms": {
          "version": "2.1.3",
          "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
          "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA=="
        }
      }
    },
    "nopt": {
      "version": "1.0.10",
      "resolved": "https://registry.npmjs.org/nopt/-/nopt-1.0.10.tgz",
      "integrity": "sha1-bd0hvSoxQXuScn3Vhfim83YI6+4=",
      "requires": {
        "abbrev": "1"
      }
    },
    "normalize-path": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-3.0.0.tgz",
      "integrity": "sha512-6eZs5Ls3WtCisHWp9S2GUy8dqkpGi4BVSz3GaqiE6ezub0512ESztXUwUB6C6IKbQkY2Pnb/mD4WYojCRwcwLA=="
    },
    "normalize-url": {
      "version": "4.5.0",
      "resolved": "https://registry.npmjs.org/normalize-url/-/normalize-url-4.5.0.tgz",
      "integrity": "sha512-2s47yzUxdexf1OhyRi4Em83iQk0aPvwTddtFz4hnSSw9dCEsLEGf6SwIO8ss/19S9iBb5sJaOuTvTGDeZI00BQ=="
    },
    "npmlog": {
      "version": "4.1.2",
      "resolved": "https://registry.npmjs.org/npmlog/-/npmlog-4.1.2.tgz",
      "integrity": "sha512-2uUqazuKlTaSI/dC8AzicUck7+IrEaOnN/e0jd3Xtt1KcGpwx30v50mL7oPyr/h9bL3E4aZccVwpwP+5W9Vjkg==",
      "requires": {
        "are-we-there-yet": "~1.1.2",
        "console-control-strings": "~1.1.0",
        "gauge": "~2.7.3",
        "set-blocking": "~2.0.0"
      }
    },
    "number-is-nan": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/number-is-nan/-/number-is-nan-1.0.1.tgz",
      "integrity": "sha1-CXtgK1NCKlIsGvuHkDGDNpQaAR0="
    },
    "object-assign": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",
      "integrity": "sha1-IQmtx5ZYh8/AXLvUQsrIv7s2CGM="
    },
    "on-finished": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/on-finished/-/on-finished-2.3.0.tgz",
      "integrity": "sha1-IPEzZIGwg811M3mSoWlxqi2QaUc=",
      "requires": {
        "ee-first": "1.1.1"
      }
    },
    "once": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
      "integrity": "sha1-WDsap3WWHUsROsF9nFC6753Xa9E=",
      "requires": {
        "wrappy": "1"
      }
    },
    "p-cancelable": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/p-cancelable/-/p-cancelable-1.1.0.tgz",
      "integrity": "sha512-s73XxOZ4zpt1edZYZzvhqFa6uvQc1vwUa0K0BdtIZgQMAJj9IbebH+JkgKZc9h+B05PKHLOTl4ajG1BmNrVZlw=="
    },
    "package-json": {
      "version": "6.5.0",
      "resolved": "https://registry.npmjs.org/package-json/-/package-json-6.5.0.tgz",
      "integrity": "sha512-k3bdm2n25tkyxcjSKzB5x8kfVxlMdgsbPr0GkZcwHsLpba6cBjqCt1KlcChKEvxHIcTB1FVMuwoijZ26xex5MQ==",
      "requires": {
        "got": "^9.6.0",
        "registry-auth-token": "^4.0.0",
        "registry-url": "^5.0.0",
        "semver": "^6.2.0"
      },
      "dependencies": {
        "semver": {
          "version": "6.3.0",
          "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
          "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw=="
        }
      }
    },
    "packet-reader": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/packet-reader/-/packet-reader-1.0.0.tgz",
      "integrity": "sha512-HAKu/fG3HpHFO0AA8WE8q2g+gBJaZ9MG7fcKk+IJPLTGAD6Psw4443l+9DGRbOIh3/aXr7Phy0TjilYivJo5XQ=="
    },
    "parseurl": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/parseurl/-/parseurl-1.3.3.tgz",
      "integrity": "sha512-CiyeOxFT/JZyN5m0z9PfXw4SCBJ6Sygz1Dpl0wqjlhDEGGBP1GnsUVEL0p63hoG1fcj3fHynXi9NYO4nWOL+qQ=="
    },
    "path-is-absolute": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/path-is-absolute/-/path-is-absolute-1.0.1.tgz",
      "integrity": "sha1-F0uSaHNVNP+8es5r9TpanhtcX18="
    },
    "path-to-regexp": {
      "version": "0.1.7",
      "resolved": "https://registry.npmjs.org/path-to-regexp/-/path-to-regexp-0.1.7.tgz",
      "integrity": "sha1-32BBeABfUi8V60SQ5yR6G/qmf4w="
    },
    "pg": {
      "version": "8.6.0",
      "resolved": "https://registry.npmjs.org/pg/-/pg-8.6.0.tgz",
      "integrity": "sha512-qNS9u61lqljTDFvmk/N66EeGq3n6Ujzj0FFyNMGQr6XuEv4tgNTXvJQTfJdcvGit5p5/DWPu+wj920hAJFI+QQ==",
      "requires": {
        "buffer-writer": "2.0.0",
        "packet-reader": "1.0.0",
        "pg-connection-string": "^2.5.0",
        "pg-pool": "^3.3.0",
        "pg-protocol": "^1.5.0",
        "pg-types": "^2.1.0",
        "pgpass": "1.x"
      }
    },
    "pg-connection-string": {
      "version": "2.5.0",
      "resolved": "https://registry.npmjs.org/pg-connection-string/-/pg-connection-string-2.5.0.tgz",
      "integrity": "sha512-r5o/V/ORTA6TmUnyWZR9nCj1klXCO2CEKNRlVuJptZe85QuhFayC7WeMic7ndayT5IRIR0S0xFxFi2ousartlQ=="
    },
    "pg-int8": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/pg-int8/-/pg-int8-1.0.1.tgz",
      "integrity": "sha512-WCtabS6t3c8SkpDBUlb1kjOs7l66xsGdKpIPZsg4wR+B3+u9UAum2odSsF9tnvxg80h4ZxLWMy4pRjOsFIqQpw=="
    },
    "pg-pool": {
      "version": "3.3.0",
      "resolved": "https://registry.npmjs.org/pg-pool/-/pg-pool-3.3.0.tgz",
      "integrity": "sha512-0O5huCql8/D6PIRFAlmccjphLYWC+JIzvUhSzXSpGaf+tjTZc4nn+Lr7mLXBbFJfvwbP0ywDv73EiaBsxn7zdg=="
    },
    "pg-protocol": {
      "version": "1.5.0",
      "resolved": "https://registry.npmjs.org/pg-protocol/-/pg-protocol-1.5.0.tgz",
      "integrity": "sha512-muRttij7H8TqRNu/DxrAJQITO4Ac7RmX3Klyr/9mJEOBeIpgnF8f9jAfRz5d3XwQZl5qBjF9gLsUtMPJE0vezQ=="
    },
    "pg-types": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/pg-types/-/pg-types-2.2.0.tgz",
      "integrity": "sha512-qTAAlrEsl8s4OiEQY69wDvcMIdQN6wdz5ojQiOy6YRMuynxenON0O5oCpJI6lshc6scgAY8qvJ2On/p+CXY0GA==",
      "requires": {
        "pg-int8": "1.0.1",
        "postgres-array": "~2.0.0",
        "postgres-bytea": "~1.0.0",
        "postgres-date": "~1.0.4",
        "postgres-interval": "^1.1.0"
      }
    },
    "pgpass": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/pgpass/-/pgpass-1.0.4.tgz",
      "integrity": "sha512-YmuA56alyBq7M59vxVBfPJrGSozru8QAdoNlWuW3cz8l+UX3cWge0vTvjKhsSHSJpo3Bom8/Mm6hf0TR5GY0+w==",
      "requires": {
        "split2": "^3.1.1"
      }
    },
    "picomatch": {
      "version": "2.2.3",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.2.3.tgz",
      "integrity": "sha512-KpELjfwcCDUb9PeigTs2mBJzXUPzAuP2oPcA989He8Rte0+YUAjw1JVedDhuTKPkHjSYzMN3npC9luThGYEKdg=="
    },
    "postgres-array": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/postgres-array/-/postgres-array-2.0.0.tgz",
      "integrity": "sha512-VpZrUqU5A69eQyW2c5CA1jtLecCsN2U/bD6VilrFDWq5+5UIEVO7nazS3TEcHf1zuPYO/sqGvUvW62g86RXZuA=="
    },
    "postgres-bytea": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/postgres-bytea/-/postgres-bytea-1.0.0.tgz",
      "integrity": "sha1-AntTPAqokOJtFy1Hz5zOzFIazTU="
    },
    "postgres-date": {
      "version": "1.0.7",
      "resolved": "https://registry.npmjs.org/postgres-date/-/postgres-date-1.0.7.tgz",
      "integrity": "sha512-suDmjLVQg78nMK2UZ454hAG+OAW+HQPZ6n++TNDUX+L0+uUlLywnoxJKDou51Zm+zTCjrCl0Nq6J9C5hP9vK/Q=="
    },
    "postgres-interval": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/postgres-interval/-/postgres-interval-1.2.0.tgz",
      "integrity": "sha512-9ZhXKM/rw350N1ovuWHbGxnGh/SNJ4cnxHiM0rxE4VN41wsg8P8zWn9hv/buK00RP4WvlOyr/RBDiptyxVbkZQ==",
      "requires": {
        "xtend": "^4.0.0"
      }
    },
    "prepend-http": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/prepend-http/-/prepend-http-2.0.0.tgz",
      "integrity": "sha1-6SQ0v6XqjBn0HN/UAddBo8gZ2Jc="
    },
    "process-nextick-args": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/process-nextick-args/-/process-nextick-args-2.0.1.tgz",
      "integrity": "sha512-3ouUOpQhtgrbOa17J7+uxOTpITYWaGP7/AhoR3+A+/1e9skrzelGi/dXzEYyvbxubEF6Wn2ypscTKiKJFFn1ag=="
    },
    "proxy-addr": {
      "version": "2.0.6",
      "resolved": "https://registry.npmjs.org/proxy-addr/-/proxy-addr-2.0.6.tgz",
      "integrity": "sha512-dh/frvCBVmSsDYzw6n926jv974gddhkFPfiN8hPOi30Wax25QZyZEGveluCgliBnqmuM+UJmBErbAUFIoDbjOw==",
      "requires": {
        "forwarded": "~0.1.2",
        "ipaddr.js": "1.9.1"
      }
    },
    "pstree.remy": {
      "version": "1.1.8",
      "resolved": "https://registry.npmjs.org/pstree.remy/-/pstree.remy-1.1.8.tgz",
      "integrity": "sha512-77DZwxQmxKnu3aR542U+X8FypNzbfJ+C5XQDk3uWjWxn6151aIMGthWYRXTqT1E5oJvg+ljaa2OJi+VfvCOQ8w=="
    },
    "pump": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/pump/-/pump-3.0.0.tgz",
      "integrity": "sha512-LwZy+p3SFs1Pytd/jYct4wpv49HiYCqd9Rlc5ZVdk0V+8Yzv6jR5Blk3TRmPL1ft69TxP0IMZGJ+WPFU2BFhww==",
      "requires": {
        "end-of-stream": "^1.1.0",
        "once": "^1.3.1"
      }
    },
    "pupa": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/pupa/-/pupa-2.1.1.tgz",
      "integrity": "sha512-l1jNAspIBSFqbT+y+5FosojNpVpF94nlI+wDUpqP9enwOTfHx9f0gh5nB96vl+6yTpsJsypeNrwfzPrKuHB41A==",
      "requires": {
        "escape-goat": "^2.0.0"
      }
    },
    "qs": {
      "version": "6.7.0",
      "resolved": "https://registry.npmjs.org/qs/-/qs-6.7.0.tgz",
      "integrity": "sha512-VCdBRNFTX1fyE7Nb6FYoURo/SPe62QCaAyzJvUjwRaIsc+NePBEniHlvxFmmX56+HZphIGtV0XeCirBtpDrTyQ=="
    },
    "range-parser": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/range-parser/-/range-parser-1.2.1.tgz",
      "integrity": "sha512-Hrgsx+orqoygnmhFbKaHE6c296J+HTAQXoxEF6gNupROmmGJRoyzfG3ccAveqCBrwr/2yxQ5BVd/GTl5agOwSg=="
    },
    "raw-body": {
      "version": "2.4.0",
      "resolved": "https://registry.npmjs.org/raw-body/-/raw-body-2.4.0.tgz",
      "integrity": "sha512-4Oz8DUIwdvoa5qMJelxipzi/iJIi40O5cGV1wNYp5hvZP8ZN0T+jiNkL0QepXs+EsQ9XJ8ipEDoiH70ySUJP3Q==",
      "requires": {
        "bytes": "3.1.0",
        "http-errors": "1.7.2",
        "iconv-lite": "0.4.24",
        "unpipe": "1.0.0"
      }
    },
    "rc": {
      "version": "1.2.8",
      "resolved": "https://registry.npmjs.org/rc/-/rc-1.2.8.tgz",
      "integrity": "sha512-y3bGgqKj3QBdxLbLkomlohkvsA8gdAiUQlSBJnBhfn+BPxg4bc62d8TcBW15wavDfgexCgccckhcZvywyQYPOw==",
      "requires": {
        "deep-extend": "^0.6.0",
        "ini": "~1.3.0",
        "minimist": "^1.2.0",
        "strip-json-comments": "~2.0.1"
      }
    },
    "readable-stream": {
      "version": "2.3.7",
      "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-2.3.7.tgz",
      "integrity": "sha512-Ebho8K4jIbHAxnuxi7o42OrZgF/ZTNcsZj6nRKyUmkhLFq8CHItp/fy6hQZuZmP/n3yZ9VBUbp4zz/mX8hmYPw==",
      "requires": {
        "core-util-is": "~1.0.0",
        "inherits": "~2.0.3",
        "isarray": "~1.0.0",
        "process-nextick-args": "~2.0.0",
        "safe-buffer": "~5.1.1",
        "string_decoder": "~1.1.1",
        "util-deprecate": "~1.0.1"
      }
    },
    "readdirp": {
      "version": "3.5.0",
      "resolved": "https://registry.npmjs.org/readdirp/-/readdirp-3.5.0.tgz",
      "integrity": "sha512-cMhu7c/8rdhkHXWsY+osBhfSy0JikwpHK/5+imo+LpeasTF8ouErHrlYkwT0++njiyuDvc7OFY5T3ukvZ8qmFQ==",
      "requires": {
        "picomatch": "^2.2.1"
      }
    },
    "registry-auth-token": {
      "version": "4.2.1",
      "resolved": "https://registry.npmjs.org/registry-auth-token/-/registry-auth-token-4.2.1.tgz",
      "integrity": "sha512-6gkSb4U6aWJB4SF2ZvLb76yCBjcvufXBqvvEx1HbmKPkutswjW1xNVRY0+daljIYRbogN7O0etYSlbiaEQyMyw==",
      "requires": {
        "rc": "^1.2.8"
      }
    },
    "registry-url": {
      "version": "5.1.0",
      "resolved": "https://registry.npmjs.org/registry-url/-/registry-url-5.1.0.tgz",
      "integrity": "sha512-8acYXXTI0AkQv6RAOjE3vOaIXZkT9wo4LOFbBKYQEEnnMNBpKqdUrI6S4NT0KPIo/WVvJ5tE/X5LF/TQUf0ekw==",
      "requires": {
        "rc": "^1.2.8"
      }
    },
    "responselike": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/responselike/-/responselike-1.0.2.tgz",
      "integrity": "sha1-kYcg7ztjHFZCvgaPFa3lpG9Loec=",
      "requires": {
        "lowercase-keys": "^1.0.0"
      }
    },
    "rimraf": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/rimraf/-/rimraf-3.0.2.tgz",
      "integrity": "sha512-JZkJMZkAGFFPP2YqXZXPbMlMBgsxzE8ILs4lMIX/2o0L9UBw9O/Y3o6wFw/i9YLapcUJWwqbi3kdxIPdC62TIA==",
      "requires": {
        "glob": "^7.1.3"
      }
    },
    "safe-buffer": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.1.2.tgz",
      "integrity": "sha512-Gd2UZBJDkXlY7GbJxfsE8/nvKkUEU1G38c1siN6QP6a9PT9MmHB8GnpscSmMJSoF8LOIrt8ud/wPtojys4G6+g=="
    },
    "safer-buffer": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz",
      "integrity": "sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg=="
    },
    "semver": {
      "version": "5.7.1",
      "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
      "integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ=="
    },
    "semver-diff": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/semver-diff/-/semver-diff-3.1.1.tgz",
      "integrity": "sha512-GX0Ix/CJcHyB8c4ykpHGIAvLyOwOobtM/8d+TQkAd81/bEjgPHrfba41Vpesr7jX/t8Uh+R3EX9eAS5be+jQYg==",
      "requires": {
        "semver": "^6.3.0"
      },
      "dependencies": {
        "semver": {
          "version": "6.3.0",
          "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
          "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw=="
        }
      }
    },
    "send": {
      "version": "0.17.1",
      "resolved": "https://registry.npmjs.org/send/-/send-0.17.1.tgz",
      "integrity": "sha512-BsVKsiGcQMFwT8UxypobUKyv7irCNRHk1T0G680vk88yf6LBByGcZJOTJCrTP2xVN6yI+XjPJcNuE3V4fT9sAg==",
      "requires": {
        "debug": "2.6.9",
        "depd": "~1.1.2",
        "destroy": "~1.0.4",
        "encodeurl": "~1.0.2",
        "escape-html": "~1.0.3",
        "etag": "~1.8.1",
        "fresh": "0.5.2",
        "http-errors": "~1.7.2",
        "mime": "1.6.0",
        "ms": "2.1.1",
        "on-finished": "~2.3.0",
        "range-parser": "~1.2.1",
        "statuses": "~1.5.0"
      },
      "dependencies": {
        "ms": {
          "version": "2.1.1",
          "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.1.tgz",
          "integrity": "sha512-tgp+dl5cGk28utYktBsrFqA7HKgrhgPsg6Z/EfhWI4gl1Hwq8B/GmY/0oXZ6nF8hDVesS/FpnYaD/kOWhYQvyg=="
        }
      }
    },
    "serve-static": {
      "version": "1.14.1",
      "resolved": "https://registry.npmjs.org/serve-static/-/serve-static-1.14.1.tgz",
      "integrity": "sha512-JMrvUwE54emCYWlTI+hGrGv5I8dEwmco/00EvkzIIsR7MqrHonbD9pO2MOfFnpFntl7ecpZs+3mW+XbQZu9QCg==",
      "requires": {
        "encodeurl": "~1.0.2",
        "escape-html": "~1.0.3",
        "parseurl": "~1.3.3",
        "send": "0.17.1"
      }
    },
    "set-blocking": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/set-blocking/-/set-blocking-2.0.0.tgz",
      "integrity": "sha1-BF+XgtARrppoA93TgrJDkrPYkPc="
    },
    "setprototypeof": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/setprototypeof/-/setprototypeof-1.1.1.tgz",
      "integrity": "sha512-JvdAWfbXeIGaZ9cILp38HntZSFSo3mWg6xGcJJsd+d4aRMOqauag1C63dJfDw7OaMYwEbHMOxEZ1lqVRYP2OAw=="
    },
    "signal-exit": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/signal-exit/-/signal-exit-3.0.3.tgz",
      "integrity": "sha512-VUJ49FC8U1OxwZLxIbTTrDvLnf/6TDgxZcK8wxR8zs13xpx7xbG60ndBlhNrFi2EMuFRoeDoJO7wthSLq42EjA=="
    },
    "split2": {
      "version": "3.2.2",
      "resolved": "https://registry.npmjs.org/split2/-/split2-3.2.2.tgz",
      "integrity": "sha512-9NThjpgZnifTkJpzTZ7Eue85S49QwpNhZTq6GRJwObb6jnLFNGB7Qm73V5HewTROPyxD0C29xqmaI68bQtV+hg==",
      "requires": {
        "readable-stream": "^3.0.0"
      },
      "dependencies": {
        "readable-stream": {
          "version": "3.6.0",
          "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-3.6.0.tgz",
          "integrity": "sha512-BViHy7LKeTz4oNnkcLJ+lVSL6vpiFeX6/d3oSH8zCW7UxP2onchk+vTGB143xuFjHS3deTgkKoXXymXqymiIdA==",
          "requires": {
            "inherits": "^2.0.3",
            "string_decoder": "^1.1.1",
            "util-deprecate": "^1.0.1"
          }
        }
      }
    },
    "statuses": {
      "version": "1.5.0",
      "resolved": "https://registry.npmjs.org/statuses/-/statuses-1.5.0.tgz",
      "integrity": "sha1-Fhx9rBd2Wf2YEfQ3cfqZOBR4Yow="
    },
    "string-width": {
      "version": "4.2.2",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.2.tgz",
      "integrity": "sha512-XBJbT3N4JhVumXE0eoLU9DCjcaF92KLNqTmFCnG1pf8duUxFGwtP6AD6nkjw9a3IdiRtL3E2w3JDiE/xi3vOeA==",
      "requires": {
        "emoji-regex": "^8.0.0",
        "is-fullwidth-code-point": "^3.0.0",
        "strip-ansi": "^6.0.0"
      },
      "dependencies": {
        "ansi-regex": {
          "version": "5.0.0",
          "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.0.tgz",
          "integrity": "sha512-bY6fj56OUQ0hU1KjFNDQuJFezqKdrAyFdIevADiqrWHwSlbmBNMHp5ak2f40Pm8JTFyM2mqxkG6ngkHO11f/lg=="
        },
        "emoji-regex": {
          "version": "8.0.0",
          "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
          "integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A=="
        },
        "is-fullwidth-code-point": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-3.0.0.tgz",
          "integrity": "sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg=="
        },
        "strip-ansi": {
          "version": "6.0.0",
          "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.0.tgz",
          "integrity": "sha512-AuvKTrTfQNYNIctbR1K/YGTR1756GycPsg7b9bdV9Duqur4gv6aKqHXah67Z8ImS7WEz5QVcOtlfW2rZEugt6w==",
          "requires": {
            "ansi-regex": "^5.0.0"
          }
        }
      }
    },
    "string_decoder": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.1.1.tgz",
      "integrity": "sha512-n/ShnvDi6FHbbVfviro+WojiFzv+s8MPMHBczVePfUpDJLwoLT0ht1l4YwBCbi8pJAveEEdnkHyPyTP/mzRfwg==",
      "requires": {
        "safe-buffer": "~5.1.0"
      }
    },
    "strip-ansi": {
      "version": "5.2.0",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-5.2.0.tgz",
      "integrity": "sha512-DuRs1gKbBqsMKIZlrffwlug8MHkcnpjs5VPmL1PAh+mA30U0DTotfDZ0d2UUsXpPmPmMMJ6W773MaA3J+lbiWA==",
      "requires": {
        "ansi-regex": "^4.1.0"
      }
    },
    "strip-json-comments": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/strip-json-comments/-/strip-json-comments-2.0.1.tgz",
      "integrity": "sha1-PFMZQukIwml8DsNEhYwobHygpgo="
    },
    "supports-color": {
      "version": "5.5.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-5.5.0.tgz",
      "integrity": "sha512-QjVjwdXIt408MIiAqCX4oUKsgU2EqAGzs2Ppkm4aQYbjm+ZEWEcW4SfFNTr4uMNZma0ey4f5lgLrkB0aX0QMow==",
      "requires": {
        "has-flag": "^3.0.0"
      }
    },
    "tar": {
      "version": "6.1.0",
      "resolved": "https://registry.npmjs.org/tar/-/tar-6.1.0.tgz",
      "integrity": "sha512-DUCttfhsnLCjwoDoFcI+B2iJgYa93vBnDUATYEeRx6sntCTdN01VnqsIuTlALXla/LWooNg0yEGeB+Y8WdFxGA==",
      "requires": {
        "chownr": "^2.0.0",
        "fs-minipass": "^2.0.0",
        "minipass": "^3.0.0",
        "minizlib": "^2.1.1",
        "mkdirp": "^1.0.3",
        "yallist": "^4.0.0"
      }
    },
    "term-size": {
      "version": "2.2.1",
      "resolved": "https://registry.npmjs.org/term-size/-/term-size-2.2.1.tgz",
      "integrity": "sha512-wK0Ri4fOGjv/XPy8SBHZChl8CM7uMc5VML7SqiQ0zG7+J5Vr+RMQDoHa2CNT6KHUnTGIXH34UDMkPzAUyapBZg=="
    },
    "to-readable-stream": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/to-readable-stream/-/to-readable-stream-1.0.0.tgz",
      "integrity": "sha512-Iq25XBt6zD5npPhlLVXGFN3/gyR2/qODcKNNyTMd4vbm39HUaOiAM4PMq0eMVC/Tkxz+Zjdsc55g9yyz+Yq00Q=="
    },
    "to-regex-range": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-5.0.1.tgz",
      "integrity": "sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==",
      "requires": {
        "is-number": "^7.0.0"
      }
    },
    "toidentifier": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/toidentifier/-/toidentifier-1.0.0.tgz",
      "integrity": "sha512-yaOH/Pk/VEhBWWTlhI+qXxDFXlejDGcQipMlyxda9nthulaxLZUNcUqFxokp0vcYnvteJln5FNQDRrxj3YcbVw=="
    },
    "touch": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/touch/-/touch-3.1.0.tgz",
      "integrity": "sha512-WBx8Uy5TLtOSRtIq+M03/sKDrXCLHxwDcquSP2c43Le03/9serjQBIztjRz6FkJez9D/hleyAXTBGLwwZUw9lA==",
      "requires": {
        "nopt": "~1.0.10"
      }
    },
    "type-fest": {
      "version": "0.8.1",
      "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.8.1.tgz",
      "integrity": "sha512-4dbzIzqvjtgiM5rw1k5rEHtBANKmdudhGyBEajN01fEyhaAIhsoKNy6y7+IN93IfpFtwY9iqi7kD+xwKhQsNJA=="
    },
    "type-is": {
      "version": "1.6.18",
      "resolved": "https://registry.npmjs.org/type-is/-/type-is-1.6.18.tgz",
      "integrity": "sha512-TkRKr9sUTxEH8MdfuCSP7VizJyzRNMjj2J2do2Jr3Kym598JVdEksuzPQCnlFPW4ky9Q+iA+ma9BGm06XQBy8g==",
      "requires": {
        "media-typer": "0.3.0",
        "mime-types": "~2.1.24"
      }
    },
    "typedarray-to-buffer": {
      "version": "3.1.5",
      "resolved": "https://registry.npmjs.org/typedarray-to-buffer/-/typedarray-to-buffer-3.1.5.tgz",
      "integrity": "sha512-zdu8XMNEDepKKR+XYOXAVPtWui0ly0NtohUscw+UmaHiAWT8hrV1rr//H6V+0DvJ3OQ19S979M0laLfX8rm82Q==",
      "requires": {
        "is-typedarray": "^1.0.0"
      }
    },
    "undefsafe": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/undefsafe/-/undefsafe-2.0.3.tgz",
      "integrity": "sha512-nrXZwwXrD/T/JXeygJqdCO6NZZ1L66HrxM/Z7mIq2oPanoN0F1nLx3lwJMu6AwJY69hdixaFQOuoYsMjE5/C2A==",
      "requires": {
        "debug": "^2.2.0"
      }
    },
    "unique-string": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/unique-string/-/unique-string-2.0.0.tgz",
      "integrity": "sha512-uNaeirEPvpZWSgzwsPGtU2zVSTrn/8L5q/IexZmH0eH6SA73CmAA5U4GwORTxQAZs95TAXLNqeLoPPNO5gZfWg==",
      "requires": {
        "crypto-random-string": "^2.0.0"
      }
    },
    "unpipe": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/unpipe/-/unpipe-1.0.0.tgz",
      "integrity": "sha1-sr9O6FFKrmFltIF4KdIbLvSZBOw="
    },
    "update-notifier": {
      "version": "4.1.3",
      "resolved": "https://registry.npmjs.org/update-notifier/-/update-notifier-4.1.3.tgz",
      "integrity": "sha512-Yld6Z0RyCYGB6ckIjffGOSOmHXj1gMeE7aROz4MG+XMkmixBX4jUngrGXNYz7wPKBmtoD4MnBa2Anu7RSKht/A==",
      "requires": {
        "boxen": "^4.2.0",
        "chalk": "^3.0.0",
        "configstore": "^5.0.1",
        "has-yarn": "^2.1.0",
        "import-lazy": "^2.1.0",
        "is-ci": "^2.0.0",
        "is-installed-globally": "^0.3.1",
        "is-npm": "^4.0.0",
        "is-yarn-global": "^0.3.0",
        "latest-version": "^5.0.0",
        "pupa": "^2.0.1",
        "semver-diff": "^3.1.1",
        "xdg-basedir": "^4.0.0"
      }
    },
    "url-parse-lax": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/url-parse-lax/-/url-parse-lax-3.0.0.tgz",
      "integrity": "sha1-FrXK/Afb42dsGxmZF3gj1lA6yww=",
      "requires": {
        "prepend-http": "^2.0.0"
      }
    },
    "util-deprecate": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/util-deprecate/-/util-deprecate-1.0.2.tgz",
      "integrity": "sha1-RQ1Nyfpw3nMnYvvS1KKJgUGaDM8="
    },
    "utils-merge": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/utils-merge/-/utils-merge-1.0.1.tgz",
      "integrity": "sha1-n5VxD1CiZ5R7LMwSR0HBAoQn5xM="
    },
    "vary": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/vary/-/vary-1.1.2.tgz",
      "integrity": "sha1-IpnwLG3tMNSllhsLn3RSShj2NPw="
    },
    "wide-align": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/wide-align/-/wide-align-1.1.3.tgz",
      "integrity": "sha512-QGkOQc8XL6Bt5PwnsExKBPuMKBxnGxWWW3fU55Xt4feHozMUhdUMaBCk290qpm/wG5u/RSKzwdAC4i51YigihA==",
      "requires": {
        "string-width": "^1.0.2 || 2"
      },
      "dependencies": {
        "ansi-regex": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-3.0.0.tgz",
          "integrity": "sha1-7QMXwyIGT3lGbAKWa922Bas32Zg="
        },
        "string-width": {
          "version": "2.1.1",
          "resolved": "https://registry.npmjs.org/string-width/-/string-width-2.1.1.tgz",
          "integrity": "sha512-nOqH59deCq9SRHlxq1Aw85Jnt4w6KvLKqWVik6oA9ZklXLNIOlqg4F2yrT1MVaTjAqvVwdfeZ7w7aCvJD7ugkw==",
          "requires": {
            "is-fullwidth-code-point": "^2.0.0",
            "strip-ansi": "^4.0.0"
          }
        },
        "strip-ansi": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-4.0.0.tgz",
          "integrity": "sha1-qEeQIusaw2iocTibY1JixQXuNo8=",
          "requires": {
            "ansi-regex": "^3.0.0"
          }
        }
      }
    },
    "widest-line": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/widest-line/-/widest-line-3.1.0.tgz",
      "integrity": "sha512-NsmoXalsWVDMGupxZ5R08ka9flZjjiLvHVAWYOKtiKM8ujtZWr9cRffak+uSE48+Ob8ObalXpwyeUiyDD6QFgg==",
      "requires": {
        "string-width": "^4.0.0"
      }
    },
    "wrappy": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
      "integrity": "sha1-tSQ9jz7BqjXxNkYFvA0QNuMKtp8="
    },
    "write-file-atomic": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/write-file-atomic/-/write-file-atomic-3.0.3.tgz",
      "integrity": "sha512-AvHcyZ5JnSfq3ioSyjrBkH9yW4m7Ayk8/9My/DD9onKeu/94fwrMocemO2QAJFAlnnDN+ZDS+ZjAR5ua1/PV/Q==",
      "requires": {
        "imurmurhash": "^0.1.4",
        "is-typedarray": "^1.0.0",
        "signal-exit": "^3.0.2",
        "typedarray-to-buffer": "^3.1.5"
      }
    },
    "xdg-basedir": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/xdg-basedir/-/xdg-basedir-4.0.0.tgz",
      "integrity": "sha512-PSNhEJDejZYV7h50BohL09Er9VaIefr2LMAf3OEmpCkjOi34eYyQYAXUTjEQtZJTKcF0E2UKTh+osDLsgNim9Q=="
    },
    "xtend": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/xtend/-/xtend-4.0.2.tgz",
      "integrity": "sha512-LKYU1iAXJXUgAXn9URjiu+MWhyUXHsvfp7mcuYm9dSUKK0/CjtrUwFAxD82/mCWbtLsGjFIad0wIsod4zrTAEQ=="
    },
    "yallist": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/yallist/-/yallist-4.0.0.tgz",
      "integrity": "sha512-3wdGidZyq5PB084XLES5TpOSRA3wjXAlIWMhum2kRcv/41Sn2emQ0dycQW4uZXLejwKvg6EsvbdlVL+FYEct7A=="
    }
  }
}


exports.getAllNotes = (req, res) => {
  client
    .query(`SELECT * FROM notes WHERE email = '${req.email}'`)
    .then((data) => {
      const noteData = data.rows;
      const filteredData = noteData.map((note) => {
        return {
          noteId: note.noteid,
          heading: note.heading,
          content: note.content,
        };
      });
      res.status(200).json({
        message: "Success",
        data: filteredData,
      });
    })
    .catch((err) => {
      console.log(erro);
      res.status(400).json({
        message: "DB error occured",
      });
    });
};



exports.updateNote = (req, res) => {
  const noteId = req.noteId;
  const { heading, content } = req.body;
  client
    .query(
      `UPDATE notes SET heading='${heading}' , content='${content}' WHERE noteid='${noteId}'`
    )
    .then((data) => {
      res.status(200).json({
        message: "Success",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({
        message: "DB error occured",
      });
    });
};

