var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_server = require("react-dom/server"), import_react2 = require("@emotion/react"), import_create_instance = __toESM(require("@emotion/server/create-instance")), import_react3 = require("@remix-run/react");

// app/context.tsx
var import_react = require("react"), ServerStyleContext = (0, import_react.createContext)(null), ClientStyleContext = (0, import_react.createContext)(null);

// app/createEmotionCache.ts
var import_cache = __toESM(require("@emotion/cache"));
function createEmotionCache() {
  return (0, import_cache.default)({ key: "css" });
}

// app/entry.server.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let cache = createEmotionCache(), { extractCriticalToChunks } = (0, import_create_instance.default)(cache), html = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ServerStyleContext.Provider, {
      value: null,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.CacheProvider, {
        value: cache,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react3.RemixServer, {
          context: remixContext,
          url: request.url
        }, void 0, !1, {
          fileName: "app/entry.server.tsx",
          lineNumber: 23,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/entry.server.tsx",
        lineNumber: 22,
        columnNumber: 7
      }, this)
    }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 21,
      columnNumber: 5
    }, this)
  ), chunks = extractCriticalToChunks(html), markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ServerStyleContext.Provider, {
      value: chunks.styles,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.CacheProvider, {
        value: cache,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react3.RemixServer, {
          context: remixContext,
          url: request.url
        }, void 0, !1, {
          fileName: "app/entry.server.tsx",
          lineNumber: 33,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/entry.server.tsx",
        lineNumber: 32,
        columnNumber: 7
      }, this)
    }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 31,
      columnNumber: 5
    }, this)
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response(`<!DOCTYPE html>${markup}`, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
var import_react10 = require("react"), import_react11 = require("@emotion/react"), import_react12 = require("@chakra-ui/react"), import_pro_theme = require("@chakra-ui/pro-theme"), import_react13 = require("@remix-run/react"), import_authorizer_react2 = require("@authorizerdev/authorizer-react");

// app/Components/Layout/index.tsx
var import_react8 = require("@chakra-ui/react"), import_react9 = __toESM(require("react"));

// app/Components/Navigation/Nav.tsx
var import_authorizer_react = require("@authorizerdev/authorizer-react"), import_react6 = require("@chakra-ui/react"), import_react7 = require("@remix-run/react"), React2 = __toESM(require("react"));

// app/Components/Navigation/Nav-Components/NavLayout.tsx
var import_react5 = require("@chakra-ui/react"), import_fi = require("react-icons/fi"), import_md = require("react-icons/md");

// app/Components/Utils/ColorMode.tsx
var import_react4 = require("@chakra-ui/react"), import_framer_motion = require("framer-motion"), import_ri = require("react-icons/ri"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function ColorMode() {
  let { colorMode, toggleColorMode } = (0, import_react4.useColorMode)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react4.DarkMode, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_framer_motion.motion.div, {
      initial: { scale: 0 },
      animate: { scale: 1 },
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      },
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react4.IconButton, {
        "aria-label": "Change the color mode",
        onClick: toggleColorMode,
        icon: colorMode === "light" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_ri.RiSunLine, {}, void 0, !1, {
          fileName: "app/Components/Utils/ColorMode.tsx",
          lineNumber: 29,
          columnNumber: 41
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_ri.RiMoonLine, {}, void 0, !1, {
          fileName: "app/Components/Utils/ColorMode.tsx",
          lineNumber: 29,
          columnNumber: 57
        }, this)
      }, void 0, !1, {
        fileName: "app/Components/Utils/ColorMode.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this)
    }, void 0, !1, {
      fileName: "app/Components/Utils/ColorMode.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/Components/Utils/ColorMode.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}

// app/Components/Navigation/Nav-Components/NavLayout.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), NavLayout = (props) => {
  let { onClickMenu, onToggleMode, isMenuOpen, menuButtonRef } = props;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react5.Flex, {
    height: "16",
    align: "center",
    justify: "space-between",
    px: "5",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react5.Heading, {
        fontSize: "4xl",
        fontWeight: "bold",
        bgGradient: "linear(to-l, #7928CA, #FF0080)",
        bgClip: "text",
        children: "Authorizer"
      }, void 0, !1, {
        fileName: "app/Components/Navigation/Nav-Components/NavLayout.tsx",
        lineNumber: 27,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react5.HStack, {
        divider: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react5.StackDivider, {
          height: "6",
          alignSelf: "unset"
        }, void 0, !1, {
          fileName: "app/Components/Navigation/Nav-Components/NavLayout.tsx",
          lineNumber: 35,
          columnNumber: 24
        }, this),
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ColorMode, {}, void 0, !1, {
            fileName: "app/Components/Navigation/Nav-Components/NavLayout.tsx",
            lineNumber: 36,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react5.IconButton, {
            ref: menuButtonRef,
            variant: "ghost",
            icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react5.Icon, {
              as: isMenuOpen ? import_md.MdClose : import_fi.FiMenu,
              fontSize: "2xl"
            }, void 0, !1, {
              fileName: "app/Components/Navigation/Nav-Components/NavLayout.tsx",
              lineNumber: 40,
              columnNumber: 17
            }, this),
            "aria-label": "Open Menu",
            onClick: onClickMenu
          }, void 0, !1, {
            fileName: "app/Components/Navigation/Nav-Components/NavLayout.tsx",
            lineNumber: 37,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/Components/Navigation/Nav-Components/NavLayout.tsx",
        lineNumber: 35,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/Components/Navigation/Nav-Components/NavLayout.tsx",
    lineNumber: 26,
    columnNumber: 5
  }, this);
};

// app/Components/Navigation/Nav.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), Nav = () => {
  let { isOpen, onOpen, onClose } = (0, import_react6.useDisclosure)(), menuButtonRef = React2.useRef(null), { user, logout } = (0, import_authorizer_react.useAuthorizer)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react6.Box, {
    pb: 5,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react6.Box, {
      as: "nav",
      bg: "bg-surface",
      boxShadow: (0, import_react6.useColorModeValue)("sm", "sm-dark"),
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLayout, {
          onClickMenu: onOpen,
          isMenuOpen: isOpen
        }, void 0, !1, {
          fileName: "app/Components/Navigation/Nav.tsx",
          lineNumber: 33,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react6.Drawer, {
          placement: "left",
          initialFocusRef: menuButtonRef,
          isOpen,
          onClose,
          size: "md",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react6.DrawerOverlay, {}, void 0, !1, {
              fileName: "app/Components/Navigation/Nav.tsx",
              lineNumber: 41,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react6.DrawerContent, {
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react6.DrawerHeader, {
                  padding: "0",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLayout, {
                    onClickMenu: onClose,
                    isMenuOpen: isOpen,
                    menuButtonRef
                  }, void 0, !1, {
                    fileName: "app/Components/Navigation/Nav.tsx",
                    lineNumber: 44,
                    columnNumber: 15
                  }, this)
                }, void 0, !1, {
                  fileName: "app/Components/Navigation/Nav.tsx",
                  lineNumber: 43,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react6.DrawerBody, {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react6.Stack, {
                      dir: "column",
                      children: user ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react7.Link, {
                        to: "/Auth/Profile",
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react6.Button, {
                          children: "Profile"
                        }, void 0, !1, {
                          fileName: "app/Components/Navigation/Nav.tsx",
                          lineNumber: 54,
                          columnNumber: 21
                        }, this)
                      }, void 0, !1, {
                        fileName: "app/Components/Navigation/Nav.tsx",
                        lineNumber: 53,
                        columnNumber: 19
                      }, this) : void 0
                    }, void 0, !1, {
                      fileName: "app/Components/Navigation/Nav.tsx",
                      lineNumber: 51,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react6.Divider, {
                      mt: 4
                    }, void 0, !1, {
                      fileName: "app/Components/Navigation/Nav.tsx",
                      lineNumber: 58,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react6.HStack, {
                      mt: "6",
                      children: user ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react6.Button, {
                        flex: "1",
                        colorScheme: "blue",
                        variant: "outline",
                        color: "accent",
                        fontWeight: "semibold",
                        onClick: () => logout(),
                        children: "Logout"
                      }, void 0, !1, {
                        fileName: "app/Components/Navigation/Nav.tsx",
                        lineNumber: 61,
                        columnNumber: 19
                      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react7.Link, {
                        to: "/Auth/Login",
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react6.Button, {
                          flex: "1",
                          colorScheme: "blue",
                          variant: "outline",
                          color: "accent",
                          fontWeight: "semibold",
                          children: "Sign in"
                        }, void 0, !1, {
                          fileName: "app/Components/Navigation/Nav.tsx",
                          lineNumber: 73,
                          columnNumber: 21
                        }, this)
                      }, void 0, !1, {
                        fileName: "app/Components/Navigation/Nav.tsx",
                        lineNumber: 72,
                        columnNumber: 19
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/Components/Navigation/Nav.tsx",
                      lineNumber: 59,
                      columnNumber: 15
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/Components/Navigation/Nav.tsx",
                  lineNumber: 50,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/Components/Navigation/Nav.tsx",
              lineNumber: 42,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/Components/Navigation/Nav.tsx",
          lineNumber: 34,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/Components/Navigation/Nav.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/Components/Navigation/Nav.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
};

// app/Components/Layout/index.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Layout({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react9.default.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav, {}, void 0, !1, {
        fileName: "app/Components/Layout/index.tsx",
        lineNumber: 8,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react8.Box, {
        m: 5,
        children
      }, void 0, !1, {
        fileName: "app/Components/Layout/index.tsx",
        lineNumber: 9,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/Components/Layout/index.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// app/root.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader = async ({ request }) => request.headers.get("cookie") ?? "", meta = () => ({
  charset: "utf-8",
  title: "EFTTools",
  viewport: "width=device-width,initial-scale=1"
}), links = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com" },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
  }
], Document = (0, import_react11.withEmotionCache)(
  ({ children }, emotionCache) => {
    let serverStyleData = (0, import_react10.useContext)(ServerStyleContext), clientStyleData = (0, import_react10.useContext)(ClientStyleContext);
    return (0, import_react10.useEffect)(() => {
      emotionCache.sheet.container = document.head;
      let tags = emotionCache.sheet.tags;
      emotionCache.sheet.flush(), tags.forEach((tag) => {
        emotionCache.sheet._insertTag(tag);
      }), clientStyleData == null || clientStyleData.reset();
    }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
      lang: "en",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", {
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react13.Meta, {}, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 76,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react13.Links, {}, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 77,
              columnNumber: 11
            }, this),
            serverStyleData == null ? void 0 : serverStyleData.map(({ key, ids, css }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("style", {
              "data-emotion": `${key} ${ids.join(" ")}`,
              dangerouslySetInnerHTML: { __html: css }
            }, key, !1, {
              fileName: "app/root.tsx",
              lineNumber: 79,
              columnNumber: 13
            }, this))
          ]
        }, void 0, !0, {
          fileName: "app/root.tsx",
          lineNumber: 75,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", {
          children: [
            children,
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react13.ScrollRestoration, {}, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 88,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react13.Scripts, {}, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 89,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react13.LiveReload, {}, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 90,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/root.tsx",
          lineNumber: 86,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 74,
      columnNumber: 7
    }, this);
  }
);
function App() {
  let cookies = (0, import_react13.useLoaderData)(), myTheme = (0, import_react12.extendTheme)(
    {
      colors: { ...import_pro_theme.theme.colors, brand: import_pro_theme.theme.colors.purple }
    },
    import_pro_theme.theme
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_authorizer_react2.AuthorizerProvider, {
    config: {
      authorizerURL: "https://YOUR AUTHORIZER URL",
      redirectURL: "/",
      clientID: "YOUR AUTHORIZER CLIENT ID"
    },
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Document, {
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react12.ChakraProvider, {
        theme: myTheme,
        colorModeManager: typeof cookies == "string" ? (0, import_react12.cookieStorageManagerSSR)(cookies) : import_react12.localStorageManager,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react13.Outlet, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 124,
            columnNumber: 13
          }, this)
        }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 123,
          columnNumber: 11
        }, this)
      }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 115,
        columnNumber: 9
      }, this)
    }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 114,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 106,
    columnNumber: 5
  }, this);
}

// app/routes/Auth/Profile.tsx
var Profile_exports = {};
__export(Profile_exports, {
  default: () => Login
});
var import_authorizer_react3 = require("@authorizerdev/authorizer-react"), import_react14 = require("@chakra-ui/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Login() {
  let { user, loading } = (0, import_authorizer_react3.useAuthorizer)();
  if (loading)
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react14.Center, {
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react14.Spinner, {}, void 0, !1, {
        fileName: "app/routes/Auth/Profile.tsx",
        lineNumber: 11,
        columnNumber: 9
      }, this)
    }, void 0, !1, {
      fileName: "app/routes/Auth/Profile.tsx",
      lineNumber: 10,
      columnNumber: 5
    }, this);
  if (user)
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react14.Box, {
      m: 5,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react14.Heading, {
          children: "Welcome"
        }, void 0, !1, {
          fileName: "app/routes/Auth/Profile.tsx",
          lineNumber: 18,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react14.Divider, {}, void 0, !1, {
          fileName: "app/routes/Auth/Profile.tsx",
          lineNumber: 19,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react14.Heading, {
          mt: -5,
          ml: 5,
          fontSize: "2xl",
          fontWeight: "thin",
          children: user == null ? void 0 : user.email
        }, void 0, !1, {
          fileName: "app/routes/Auth/Profile.tsx",
          lineNumber: 20,
          columnNumber: 13
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/routes/Auth/Profile.tsx",
      lineNumber: 17,
      columnNumber: 9
    }, this);
}

// app/routes/Auth/Login.tsx
var Login_exports = {};
__export(Login_exports, {
  default: () => Login2
});
var import_authorizer_react4 = require("@authorizerdev/authorizer-react"), import_react15 = require("@chakra-ui/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Login2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react15.Box, {
    m: 5,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_authorizer_react4.Authorizer, {}, void 0, !1, {
      fileName: "app/routes/Auth/Login.tsx",
      lineNumber: 9,
      columnNumber: 9
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/Auth/Login.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
var import_authorizer_react5 = require("@authorizerdev/authorizer-react"), import_react16 = require("@chakra-ui/react"), import_react17 = require("@remix-run/react"), import_react18 = __toESM(require("react")), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Index() {
  let { user, loading } = (0, import_authorizer_react5.useAuthorizer)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react18.default.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react16.Box, {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react16.Heading, {
            children: "Authorizer + Remix + Chakra-UI"
          }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 22,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react16.Text, {
            children: [
              "Welcome",
              " ",
              loading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react16.Spinner, {
                mt: 5
              }, void 0, !1, {
                fileName: "app/routes/index.tsx",
                lineNumber: 26,
                columnNumber: 13
              }, this) : user ? (user == null ? void 0 : user.preferred_username) || (user == null ? void 0 : user.email) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react17.Link, {
                to: "/Auth/Login",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react16.Text, {
                  display: "inline",
                  children: "Login!"
                }, void 0, !1, {
                  fileName: "app/routes/index.tsx",
                  lineNumber: 31,
                  columnNumber: 15
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/index.tsx",
                lineNumber: 30,
                columnNumber: 13
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/index.tsx",
            lineNumber: 23,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react17.Link, {
            to: "/Auth/Profile",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react16.Button, {
              children: "Profile"
            }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 36,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 35,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 21,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react16.Divider, {
        mt: 4
      }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 39,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react16.Box, {
        as: "section",
        py: { base: "4", md: "8" },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react16.Container, {
          maxW: "3xl",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react16.Box, {
            bg: "bg-surface",
            boxShadow: (0, import_react16.useColorModeValue)("sm", "sm-dark"),
            borderRadius: "lg",
            p: { base: "4", md: "6" },
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react16.Stack, {
              spacing: "5",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react16.Stack, {
                spacing: "1",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react16.Text, {
                    fontSize: "lg",
                    fontWeight: "medium",
                    children: "Authorizer"
                  }, void 0, !1, {
                    fileName: "app/routes/index.tsx",
                    lineNumber: 50,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react16.Text, {
                    fontSize: "sm",
                    color: "muted",
                    children: "A powerful authentication system that pairs beautify with Remix."
                  }, void 0, !1, {
                    fileName: "app/routes/index.tsx",
                    lineNumber: 53,
                    columnNumber: 17
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/index.tsx",
                lineNumber: 49,
                columnNumber: 15
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 48,
              columnNumber: 13
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 42,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 41,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 40,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "a20b0d86", entry: { module: "/build/entry.client-A4GYMB36.js", imports: ["/build/_shared/chunk-76OBRXFK.js", "/build/_shared/chunk-4UNRPS4K.js", "/build/_shared/chunk-XNFJFTP3.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-2PN4AZSD.js", imports: ["/build/_shared/chunk-EU2ZIHMX.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/Auth/Login": { id: "routes/Auth/Login", parentId: "root", path: "Auth/Login", index: void 0, caseSensitive: void 0, module: "/build/routes/Auth/Login-4PPCU2J3.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/Auth/Profile": { id: "routes/Auth/Profile", parentId: "root", path: "Auth/Profile", index: void 0, caseSensitive: void 0, module: "/build/routes/Auth/Profile-6V7TBAE4.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-F5S5CNWY.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-A20B0D86.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/Auth/Profile": {
    id: "routes/Auth/Profile",
    parentId: "root",
    path: "Auth/Profile",
    index: void 0,
    caseSensitive: void 0,
    module: Profile_exports
  },
  "routes/Auth/Login": {
    id: "routes/Auth/Login",
    parentId: "root",
    path: "Auth/Login",
    index: void 0,
    caseSensitive: void 0,
    module: Login_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
