module.exports = [
"[project]/components/NicknameModal.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NicknameModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
function NicknameModal({ isOpen, onClose, onSubmit, onReset, initialNickname, targetName }) {
    const [nickname, setNickname] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialNickname || '');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isOpen) {
            setNickname(initialNickname || '');
        }
    }, [
        isOpen,
        initialNickname
    ]);
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "modal-overlay",
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            onClick: (e)=>e.stopPropagation(),
            className: "jsx-c99a30ff097a6e87" + " " + "modal-content liquid-glass",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-c99a30ff097a6e87" + " " + "modal-header",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "jsx-c99a30ff097a6e87" + " " + "modal-title",
                            children: [
                                "เปลี่ยนชื่อเล่นสำหรับ ",
                                targetName
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/NicknameModal.js",
                            lineNumber: 20,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "jsx-c99a30ff097a6e87" + " " + "modal-close",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "jsx-c99a30ff097a6e87" + " " + "bi bi-x-lg"
                            }, void 0, false, {
                                fileName: "[project]/components/NicknameModal.js",
                                lineNumber: 22,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/NicknameModal.js",
                            lineNumber: 21,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/NicknameModal.js",
                    lineNumber: 19,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-c99a30ff097a6e87" + " " + "modal-body",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-c99a30ff097a6e87" + " " + "input-group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "jsx-c99a30ff097a6e87" + " " + "modal-label",
                                children: "ชื่อเล่นใหม่"
                            }, void 0, false, {
                                fileName: "[project]/components/NicknameModal.js",
                                lineNumber: 27,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: nickname,
                                onChange: (e)=>setNickname(e.target.value),
                                placeholder: "ป้อนชื่อเล่นที่ต้องการ...",
                                autoFocus: true,
                                onKeyDown: (e)=>{
                                    if (e.key === 'Enter') onSubmit(nickname);
                                    if (e.key === 'Escape') onClose();
                                },
                                className: "jsx-c99a30ff097a6e87" + " " + "modal-input"
                            }, void 0, false, {
                                fileName: "[project]/components/NicknameModal.js",
                                lineNumber: 28,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/NicknameModal.js",
                        lineNumber: 26,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/NicknameModal.js",
                    lineNumber: 25,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-c99a30ff097a6e87" + " " + "modal-footer",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-c99a30ff097a6e87" + " " + "footer-left",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onReset(),
                                className: "jsx-c99a30ff097a6e87" + " " + "btn-reset",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: "jsx-c99a30ff097a6e87" + " " + "bi bi-arrow-counterclockwise"
                                    }, void 0, false, {
                                        fileName: "[project]/components/NicknameModal.js",
                                        lineNumber: 45,
                                        columnNumber: 15
                                    }, this),
                                    " คืนค่าชื่อเดิม"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/NicknameModal.js",
                                lineNumber: 44,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/NicknameModal.js",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-c99a30ff097a6e87" + " " + "footer-right",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onClose,
                                    className: "jsx-c99a30ff097a6e87" + " " + "btn-cancel",
                                    children: "ยกเลิก"
                                }, void 0, false, {
                                    fileName: "[project]/components/NicknameModal.js",
                                    lineNumber: 49,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>onSubmit(nickname),
                                    className: "jsx-c99a30ff097a6e87" + " " + "btn-submit",
                                    children: "บันทึก"
                                }, void 0, false, {
                                    fileName: "[project]/components/NicknameModal.js",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/NicknameModal.js",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/NicknameModal.js",
                    lineNumber: 42,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    id: "c99a30ff097a6e87",
                    children: ".modal-overlay.jsx-c99a30ff097a6e87{-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);z-index:9999;background:#000000b3;justify-content:center;align-items:center;animation:.2s ease-out fadeIn;display:flex;position:fixed;inset:0}.modal-content.jsx-c99a30ff097a6e87{background:#161b22fa;border:1px solid #ffffff26;border-radius:28px;width:90%;min-width:320px;max-width:480px;padding:30px;animation:.3s cubic-bezier(.34,1.56,.64,1) slideUp;box-shadow:0 25px 50px #00000080}.modal-header.jsx-c99a30ff097a6e87{justify-content:space-between;align-items:center;gap:16px;margin-bottom:24px;display:flex}.modal-title.jsx-c99a30ff097a6e87{color:#fff;margin:0;font-size:1.35rem;font-weight:800;line-height:1.3}.modal-close.jsx-c99a30ff097a6e87{color:#8b949e;cursor:pointer;background:#ffffff0d;border:1px solid #ffffff1a;border-radius:12px;flex-shrink:0;justify-content:center;align-items:center;width:36px;height:36px;font-size:1rem;transition:all .2s;display:flex}.modal-close.jsx-c99a30ff097a6e87:hover{color:#fff;background:#ffffff1a;transform:rotate(90deg)}.modal-body.jsx-c99a30ff097a6e87{margin-bottom:30px}.input-group.jsx-c99a30ff097a6e87{flex-direction:column;gap:10px;display:flex}.modal-label.jsx-c99a30ff097a6e87{color:#8b949e;margin-left:4px;font-size:.95rem;font-weight:600;display:block}.modal-input.jsx-c99a30ff097a6e87{color:#fff;background:#0000004d;border:1px solid #ffffff1a;border-radius:14px;outline:none;width:100%;padding:14px 18px;font-size:1.05rem;transition:all .2s}.modal-input.jsx-c99a30ff097a6e87:focus{background:#0006;border-color:#58a6ff;box-shadow:0 0 0 4px #58a6ff26}.modal-footer.jsx-c99a30ff097a6e87{flex-wrap:wrap;justify-content:space-between;align-items:center;gap:16px;display:flex}.footer-right.jsx-c99a30ff097a6e87{flex:1;justify-content:flex-end;gap:12px;display:flex}.btn-submit.jsx-c99a30ff097a6e87{color:#fff;cursor:pointer;white-space:nowrap;background:#238636;border:none;border-radius:14px;padding:12px 24px;font-size:1rem;font-weight:700;transition:all .2s}.btn-submit.jsx-c99a30ff097a6e87:hover{background:#2ea043;transform:translateY(-2px);box-shadow:0 8px 20px #2386364d}.btn-cancel.jsx-c99a30ff097a6e87{color:#fff;cursor:pointer;white-space:nowrap;background:#ffffff0d;border:1px solid #ffffff1a;border-radius:14px;padding:12px 24px;font-size:1rem;font-weight:700;transition:all .2s}.btn-cancel.jsx-c99a30ff097a6e87:hover{background:#ffffff1a;transform:translateY(-2px)}.btn-reset.jsx-c99a30ff097a6e87{color:#f85149;cursor:pointer;white-space:nowrap;background:0 0;border:1px solid #f8514933;border-radius:12px;align-items:center;gap:8px;padding:10px 16px;font-size:.9rem;font-weight:700;transition:all .2s;display:flex}.btn-reset.jsx-c99a30ff097a6e87:hover{background:#f851491a;border-color:#f85149;transform:translateY(-2px)}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes slideUp{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}"
                }, void 0, false, void 0, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/NicknameModal.js",
            lineNumber: 18,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/NicknameModal.js",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/messages/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MessagesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Avatar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Avatar.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NicknameModal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/NicknameModal.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
const resolvePath = (raw)=>{
    if (!raw || typeof raw !== 'string') return '';
    if (raw.startsWith('http://') || raw.startsWith('https://')) return raw;
    return raw.startsWith('/') ? raw : `/${raw}`;
};
function MessagesPage() {
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const [conversations, setConversations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [activeId, setActiveId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [draft, setDraft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [meId, setMeId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [unreadIds, setUnreadIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [isNicknameModalOpen, setIsNicknameModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loadingConversations, setLoadingConversations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [loadingMessages, setLoadingMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [sending, setSending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [uploading, setUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedFiles, setSelectedFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [previewUrls, setPreviewUrls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (selectedFiles.length === 0) {
            setPreviewUrls([]);
            return;
        }
        const urls = selectedFiles.map((file)=>URL.createObjectURL(file));
        setPreviewUrls(urls);
        return ()=>urls.forEach((url)=>URL.revokeObjectURL(url));
    }, [
        selectedFiles
    ]);
    const lastCursorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pollTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const threadRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scrollToBottom = (behavior = 'smooth')=>{
        if (threadRef.current) {
            threadRef.current.scrollTo({
                top: threadRef.current.scrollHeight,
                behavior
            });
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (messages.length > 0) {
            scrollToBottom('smooth');
        }
    }, [
        messages
    ]);
    const activeConversation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>conversations.find((c)=>c.id === activeId) || null, [
        conversations,
        activeId
    ]);
    const formatTime = (d)=>{
        const date = d instanceof Date ? d : new Date(d);
        if (Number.isNaN(date.getTime())) return '';
        return date.toLocaleTimeString('th-TH', {
            hour: '2-digit',
            minute: '2-digit'
        });
    };
    const loadConversations = async ()=>{
        const res = await fetch('/api/conversations', {
            cache: 'no-store'
        });
        if (!res.ok) {
            throw new Error('Failed to load conversations');
        }
        const data = await res.json().catch(()=>[]);
        const list = Array.isArray(data) ? data : [];
        // Auto-update unread status if last message is not from me and conversation is not active
        setUnreadIds((prev)=>{
            const next = new Set(prev);
            list.forEach((c)=>{
                if (c.id !== activeId && c.lastMessage && c.lastMessage.senderId !== meId) {
                    // Simple session-based NEW check: if message is newer than 10 seconds or we haven't seen this conv updated
                    if (c.lastMessage.createdAt > new Date(Date.now() - 10000).toISOString()) {
                        next.add(c.id);
                        c.status = 'NEW';
                    }
                }
            });
            return next;
        });
        setConversations(list);
        return list;
    };
    const loadInitialMessages = async (conversationId)=>{
        setLoadingMessages(true);
        try {
            const res = await fetch(`/api/conversations/${conversationId}/messages?take=50`, {
                cache: 'no-store'
            });
            if (!res.ok) {
                throw new Error('Failed to load messages');
            }
            const data = await res.json().catch(()=>[]);
            const list = Array.isArray(data) ? data : [];
            setMessages(list);
            lastCursorRef.current = list.length ? new Date(list[list.length - 1].createdAt).toISOString() : null;
        } finally{
            setLoadingMessages(false);
        }
    };
    const pollNewMessages = async (conversationId)=>{
        const cursor = lastCursorRef.current;
        const qs = cursor ? `?cursor=${encodeURIComponent(cursor)}&take=50` : '?take=50';
        const res = await fetch(`/api/conversations/${conversationId}/messages${qs}`, {
            cache: 'no-store'
        });
        if (!res.ok) return;
        const data = await res.json().catch(()=>[]);
        const incoming = Array.isArray(data) ? data : [];
        // Also check for 'Seen' updates for my messages
        const seenRes = await fetch(`/api/conversations/${conversationId}/messages?checkSeen=true`, {
            cache: 'no-store'
        });
        if (seenRes.ok) {
            const seenData = await seenRes.json().catch(()=>[]);
            if (Array.isArray(seenData) && seenData.length > 0) {
                setMessages((prev)=>{
                    const next = [
                        ...prev
                    ];
                    let changed = false;
                    seenData.forEach((s)=>{
                        const idx = next.findIndex((m)=>m.id === s.id);
                        if (idx !== -1 && !next[idx].readAt) {
                            next[idx] = {
                                ...next[idx],
                                readAt: s.readAt
                            };
                            changed = true;
                        }
                    });
                    return changed ? next : prev;
                });
            }
        }
        if (!incoming.length) return;
        setMessages((prev)=>{
            const seen = new Set(prev.map((m)=>m.id));
            const merged = [
                ...prev
            ];
            for (const m of incoming){
                if (!seen.has(m.id)) merged.push(m);
            }
            return merged;
        });
        lastCursorRef.current = new Date(incoming[incoming.length - 1].createdAt).toISOString();
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const timer = setInterval(()=>{
            loadConversations().catch(()=>{});
        }, 5000);
        return ()=>clearInterval(timer);
    }, [
        activeId,
        meId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let cancelled = false;
        const run = async ()=>{
            setLoadingConversations(true);
            try {
                const list = await loadConversations();
                if (cancelled) return;
                const requested = searchParams?.get('c');
                if (requested && list.some((c)=>c.id === requested)) {
                    setActiveId(requested);
                    return;
                }
                if (!activeId && list.length) setActiveId(list[0].id);
            } catch  {
            // ignore
            } finally{
                if (!cancelled) setLoadingConversations(false);
            }
        };
        run();
        return ()=>{
            cancelled = true;
        };
    }, [
        searchParams
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let cancelled = false;
        const loadMe = async ()=>{
            try {
                const res = await fetch('/api/profile', {
                    cache: 'no-store'
                });
                if (!res.ok) return;
                const data = await res.json().catch(()=>null);
                const id = data?.user?.id;
                if (!cancelled && typeof id === 'string') setMeId(id);
            } catch  {
            // ignore
            }
        };
        loadMe();
        return ()=>{
            cancelled = true;
        };
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!activeId) return;
        setUnreadIds((prev)=>{
            if (prev.has(activeId)) {
                const next = new Set(prev);
                next.delete(activeId);
                return next;
            }
            return prev;
        });
        let stopped = false;
        lastCursorRef.current = null;
        setMessages([]);
        const start = async ()=>{
            try {
                await loadInitialMessages(activeId);
            } catch  {
            // ignore
            }
            if (stopped) return;
            if (pollTimerRef.current) {
                clearInterval(pollTimerRef.current);
                pollTimerRef.current = null;
            }
            pollTimerRef.current = setInterval(()=>{
                pollNewMessages(activeId);
            }, 1500);
        };
        start();
        return ()=>{
            stopped = true;
            if (pollTimerRef.current) {
                clearInterval(pollTimerRef.current);
                pollTimerRef.current = null;
            }
        };
    }, [
        activeId
    ]);
    const handleSend = async ()=>{
        if (!draft.trim() && selectedFiles.length === 0) return;
        if (!activeId) return;
        if (sending || uploading) return;
        const body = draft.trim();
        setSending(true);
        try {
            if (selectedFiles.length > 0) {
                setUploading(true);
                const fd = new FormData();
                selectedFiles.forEach((f)=>fd.append('files', f));
                if (body) fd.append('body', body);
                const res = await fetch(`/api/conversations/${activeId}/messages/attachments`, {
                    method: 'POST',
                    body: fd
                });
                if (res.ok) {
                    setDraft('');
                    setSelectedFiles([]);
                    await pollNewMessages(activeId);
                    await loadConversations();
                } else {
                    const err = await res.json().catch(()=>null);
                    alert(err?.error || 'อัปโหลดรูปภาพล้มเหลว');
                }
            } else {
                const res = await fetch(`/api/conversations/${activeId}/messages`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        body
                    })
                });
                if (res.ok) {
                    const created = await res.json().catch(()=>null);
                    if (created?.id) {
                        setDraft('');
                        setMessages((prev)=>[
                                ...prev,
                                created
                            ]);
                        lastCursorRef.current = new Date(created.createdAt).toISOString();
                        await loadConversations();
                    }
                }
            }
        } catch (error) {
            console.error('Send error:', error);
            alert('เกิดข้อผิดพลาดในการส่งข้อความ');
        } finally{
            setSending(false);
            setUploading(false);
        }
    };
    const handleFileSelect = (e)=>{
        const files = Array.from(e.target.files || []);
        if (!files.length) return;
        setSelectedFiles((prev)=>[
                ...prev,
                ...files
            ]);
        if (fileInputRef.current) fileInputRef.current.value = '';
    };
    const removeFile = (index)=>{
        setSelectedFiles((prev)=>prev.filter((_, i)=>i !== index));
    };
    const handleNickname = async ()=>{
        if (!activeConversation?.otherUser?.id) return;
        setIsNicknameModalOpen(true);
    };
    const submitNickname = async (newNickname)=>{
        if (newNickname === null) return;
        try {
            const res = await fetch(`/api/conversations/${activeId}/nickname`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    targetUserId: activeConversation.otherUser.id,
                    nickname: newNickname
                })
            });
            if (res.ok) {
                setIsNicknameModalOpen(false);
                loadConversations(); // Refresh nicknames in list
                if (activeId) loadInitialMessages(activeId); // Refresh nicknames in messages
            } else {
                alert('ไม่สามารถเปลี่ยนชื่อเล่นได้');
            }
        } catch (error) {
            console.error(error);
        }
    };
    const resetNickname = async ()=>{
        if (!activeConversation?.otherUser?.id) return;
        try {
            const res = await fetch(`/api/conversations/${activeId}/nickname`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    targetUserId: activeConversation.otherUser.id
                })
            });
            if (res.ok) {
                setIsNicknameModalOpen(false);
                loadConversations();
                if (activeId) loadInitialMessages(activeId);
            } else {
                alert('ไม่สามารถคืนค่าชื่อเล่นได้');
            }
        } catch (error) {
            console.error(error);
        }
    };
    const handleBlock = async ()=>{
        if (!activeConversation?.otherUser?.id) return;
        if (!confirm('คุณแน่ใจหรือไม่ที่จะบล็อกผู้ใช้นี้?')) return;
        try {
            const res = await fetch(`/api/conversations/${activeId}/block`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    targetUserId: activeConversation.otherUser.id
                })
            });
            if (res.ok) {
                alert('บล็อกผู้ใช้เรียบร้อยแล้ว');
            } else {
                alert('เกิดข้อผิดพลาดในการบล็อก');
            }
        } catch (error) {
            console.error(error);
        }
    };
    const handleReport = async ()=>{
        if (!activeConversation?.otherUser?.id) return;
        const reason = prompt('ระบุเหตุผลในการรายงาน:', 'พฤติกรรมไม่เหมาะสม');
        if (!reason) return;
        try {
            const res = await fetch(`/api/conversations/${activeId}/report`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    targetUserId: activeConversation.otherUser.id,
                    reason
                })
            });
            if (res.ok) {
                alert('ส่งรายงานเรียบร้อยแล้ว ขอบคุณที่ช่วยดูแลชุมชนของเรา');
            } else {
                alert('เกิดข้อผิดพลาดในการส่งรายงาน');
            }
        } catch (error) {
            console.error(error);
        }
    };
    const handleDeleteChat = async ()=>{
        if (!activeId) return;
        if (!confirm('คุณแน่ใจหรือไม่ที่จะลบแชทนี้? การลบจะมีผลกับทั้งสองฝ่ายและไม่สามารถกู้คืนได้')) return;
        try {
            const res = await fetch(`/api/conversations/${activeId}`, {
                method: 'DELETE'
            });
            if (res.ok) {
                alert('ลบแชทเรียบร้อยแล้ว');
                // 1. Refresh the conversation list
                const updatedList = await loadConversations();
                // 2. Select the first available conversation if any, otherwise clear activeId
                if (updatedList && updatedList.length > 0) {
                    // Find the next conversation to select (prefer the one that was previously second, or just the first)
                    const nextConv = updatedList.find((c)=>c.id !== activeId) || updatedList[0];
                    setActiveId(nextConv.id);
                } else {
                    setActiveId(null);
                    setMessages([]);
                }
            } else {
                alert('เกิดข้อผิดพลาดในการลบแชท');
            }
        } catch (error) {
            console.error(error);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "messages-wrap",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "messages-shell liquid-glass",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "messages-grid",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                            className: "messages-left",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "messages-brand",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "messages-brand-icon",
                                            children: "..."
                                        }, void 0, false, {
                                            fileName: "[project]/app/messages/page.js",
                                            lineNumber: 464,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "messages-brand-title",
                                            children: "QuickChat"
                                        }, void 0, false, {
                                            fileName: "[project]/app/messages/page.js",
                                            lineNumber: 465,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "messages-brand-more",
                                            type: "button",
                                            "aria-label": "More",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: "bi bi-three-dots-vertical"
                                            }, void 0, false, {
                                                fileName: "[project]/app/messages/page.js",
                                                lineNumber: 467,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/messages/page.js",
                                            lineNumber: 466,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/messages/page.js",
                                    lineNumber: 463,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "messages-search",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            className: "bi bi-search"
                                        }, void 0, false, {
                                            fileName: "[project]/app/messages/page.js",
                                            lineNumber: 472,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            placeholder: "Search User...",
                                            value: '',
                                            onChange: ()=>{}
                                        }, void 0, false, {
                                            fileName: "[project]/app/messages/page.js",
                                            lineNumber: 473,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/messages/page.js",
                                    lineNumber: 471,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "messages-list",
                                    children: loadingConversations ? null : conversations.map((c)=>{
                                        const displayName = c.nickname?.nickname || c.otherUser?.name || c.otherUser?.email || '-';
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: `messages-item ${c.id === activeId ? 'active' : ''} ${c.unreadCount > 0 ? 'unread' : ''}`,
                                            onClick: ()=>setActiveId(c.id),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "messages-avatar-wrapper",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Avatar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            src: c.otherUser?.avatarPath,
                                                            name: displayName,
                                                            size: 42,
                                                            className: "messages-avatar"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/messages/page.js",
                                                            lineNumber: 487,
                                                            columnNumber: 23
                                                        }, this),
                                                        c.unreadCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "messages-new-badge",
                                                            children: c.unreadCount
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/messages/page.js",
                                                            lineNumber: 493,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/messages/page.js",
                                                    lineNumber: 486,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "messages-item-meta",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "messages-item-name",
                                                            children: displayName
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/messages/page.js",
                                                            lineNumber: 496,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "messages-item-status",
                                                            children: c.lastMessage?.body ? c.lastMessage.body : ' '
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/messages/page.js",
                                                            lineNumber: 497,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/messages/page.js",
                                                    lineNumber: 495,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, c.id, true, {
                                            fileName: "[project]/app/messages/page.js",
                                            lineNumber: 480,
                                            columnNumber: 19
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/app/messages/page.js",
                                    lineNumber: 476,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/messages/page.js",
                            lineNumber: 462,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "messages-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "messages-topbar",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "messages-topbar-left",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Avatar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    src: activeConversation?.otherUser?.avatarPath,
                                                    name: activeConversation?.nickname?.nickname || activeConversation?.otherUser?.name || activeConversation?.otherUser?.email,
                                                    size: 42,
                                                    className: "messages-avatar"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/messages/page.js",
                                                    lineNumber: 508,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "messages-topbar-name-row",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "messages-topbar-name",
                                                                    children: activeConversation?.nickname?.nickname || activeConversation?.otherUser?.name || activeConversation?.otherUser?.email || '-'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/messages/page.js",
                                                                    lineNumber: 516,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: "nickname-edit-btn",
                                                                    onClick: handleNickname,
                                                                    title: "เปลี่ยนชื่อเล่น",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                        className: "bi bi-pencil-square"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/messages/page.js",
                                                                        lineNumber: 518,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/messages/page.js",
                                                                    lineNumber: 517,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/messages/page.js",
                                                            lineNumber: 515,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "messages-topbar-sub",
                                                            children: " "
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/messages/page.js",
                                                            lineNumber: 521,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/messages/page.js",
                                                    lineNumber: 514,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/messages/page.js",
                                            lineNumber: 507,
                                            columnNumber: 15
                                        }, this),
                                        activeConversation?.otherUser && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: `/profile/${activeConversation.otherUser.id}`,
                                            className: "messages-topbar-btn",
                                            title: "View Profile",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: "bi bi-person-circle"
                                            }, void 0, false, {
                                                fileName: "[project]/app/messages/page.js",
                                                lineNumber: 530,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/messages/page.js",
                                            lineNumber: 525,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/messages/page.js",
                                    lineNumber: 506,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "messages-thread",
                                    ref: threadRef,
                                    children: [
                                        loadingMessages ? null : messages.map((m)=>{
                                            const fromMe = !!meId && m.senderId === meId;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `messages-bubble-row ${fromMe ? 'me' : 'them'}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `messages-bubble ${fromMe ? 'me' : 'them'}`,
                                                    children: [
                                                        Array.isArray(m.attachments) && m.attachments.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "messages-bubble-attachments",
                                                            children: m.attachments.map((att)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "messages-attachment-item",
                                                                    children: att.mimeType?.startsWith('image/') ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                        href: resolvePath(att.path),
                                                                        target: "_blank",
                                                                        rel: "noreferrer",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                            src: resolvePath(att.path),
                                                                            alt: att.filename,
                                                                            className: "messages-attachment-img"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/messages/page.js",
                                                                            lineNumber: 549,
                                                                            columnNumber: 39
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/messages/page.js",
                                                                        lineNumber: 548,
                                                                        columnNumber: 37
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                        href: resolvePath(att.path),
                                                                        target: "_blank",
                                                                        rel: "noreferrer",
                                                                        className: "messages-attachment-file",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                className: "bi bi-file-earmark-arrow-down"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/messages/page.js",
                                                                                lineNumber: 553,
                                                                                columnNumber: 39
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: att.filename
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/messages/page.js",
                                                                                lineNumber: 554,
                                                                                columnNumber: 39
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/messages/page.js",
                                                                        lineNumber: 552,
                                                                        columnNumber: 37
                                                                    }, this)
                                                                }, att.id, false, {
                                                                    fileName: "[project]/app/messages/page.js",
                                                                    lineNumber: 546,
                                                                    columnNumber: 33
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/messages/page.js",
                                                            lineNumber: 544,
                                                            columnNumber: 29
                                                        }, this),
                                                        m.body && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "messages-bubble-text",
                                                            children: m.body
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/messages/page.js",
                                                            lineNumber: 561,
                                                            columnNumber: 38
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "messages-bubble-footer",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "messages-bubble-time",
                                                                    children: formatTime(m.createdAt)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/messages/page.js",
                                                                    lineNumber: 563,
                                                                    columnNumber: 29
                                                                }, this),
                                                                fromMe && m.readAt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "messages-seen-status",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                            className: "bi bi-check2-all"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/messages/page.js",
                                                                            lineNumber: 566,
                                                                            columnNumber: 33
                                                                        }, this),
                                                                        " อ่านแล้ว"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/messages/page.js",
                                                                    lineNumber: 565,
                                                                    columnNumber: 31
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/messages/page.js",
                                                            lineNumber: 562,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/messages/page.js",
                                                    lineNumber: 542,
                                                    columnNumber: 25
                                                }, this)
                                            }, m.id, false, {
                                                fileName: "[project]/app/messages/page.js",
                                                lineNumber: 541,
                                                columnNumber: 23
                                            }, this);
                                        }),
                                        loadingMessages ? null : !messages.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "messages-empty",
                                            children: "ยังไม่มีข้อความ"
                                        }, void 0, false, {
                                            fileName: "[project]/app/messages/page.js",
                                            lineNumber: 575,
                                            columnNumber: 60
                                        }, this) : null
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/messages/page.js",
                                    lineNumber: 535,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "messages-composer",
                                    children: [
                                        previewUrls.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "messages-previews",
                                            children: previewUrls.map((url, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "messages-preview-item",
                                                    children: [
                                                        selectedFiles[idx]?.type?.startsWith('image/') ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: url,
                                                            alt: ""
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/messages/page.js",
                                                            lineNumber: 584,
                                                            columnNumber: 25
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "file-preview-icon",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                    className: "bi bi-file-earmark-text"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/messages/page.js",
                                                                    lineNumber: 587,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "file-preview-name",
                                                                    children: selectedFiles[idx]?.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/messages/page.js",
                                                                    lineNumber: 588,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/messages/page.js",
                                                            lineNumber: 586,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>removeFile(idx),
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "bi bi-x"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/messages/page.js",
                                                                lineNumber: 592,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/messages/page.js",
                                                            lineNumber: 591,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, url, true, {
                                                    fileName: "[project]/app/messages/page.js",
                                                    lineNumber: 582,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/messages/page.js",
                                            lineNumber: 580,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "messages-composer-inner",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "messages-icon-btn",
                                                    type: "button",
                                                    "aria-label": "Attach",
                                                    onClick: ()=>fileInputRef.current?.click(),
                                                    disabled: uploading,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                        className: `bi ${uploading ? 'bi-hourglass-split' : 'bi-plus-lg'}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/messages/page.js",
                                                        lineNumber: 606,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/messages/page.js",
                                                    lineNumber: 599,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "file",
                                                    multiple: true,
                                                    accept: "image/*,.pdf,.doc,.docx,.txt,.zip,.rar",
                                                    ref: fileInputRef,
                                                    style: {
                                                        display: 'none'
                                                    },
                                                    onChange: handleFileSelect
                                                }, void 0, false, {
                                                    fileName: "[project]/app/messages/page.js",
                                                    lineNumber: 608,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    className: "messages-input",
                                                    placeholder: uploading ? "กำลังอัปโหลด..." : "พิมพ์ข้อความ...",
                                                    value: draft || '',
                                                    onChange: (e)=>{
                                                        setDraft(e.target.value);
                                                        e.target.style.height = 'auto';
                                                        e.target.style.height = `${e.target.scrollHeight}px`;
                                                    },
                                                    disabled: uploading,
                                                    rows: 1,
                                                    style: {
                                                        height: 'auto',
                                                        overflow: 'hidden'
                                                    },
                                                    onKeyDown: (e)=>{
                                                        if (e.key === 'Enter' && !e.shiftKey) {
                                                            e.preventDefault();
                                                            handleSend();
                                                            e.target.style.height = 'auto';
                                                        }
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/messages/page.js",
                                                    lineNumber: 616,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "messages-send",
                                                    type: "button",
                                                    onClick: handleSend,
                                                    "aria-label": "Send",
                                                    disabled: sending || uploading || !draft.trim() && selectedFiles.length === 0,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                        className: "bi bi-send-fill"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/messages/page.js",
                                                        lineNumber: 637,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/messages/page.js",
                                                    lineNumber: 636,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/messages/page.js",
                                            lineNumber: 598,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/messages/page.js",
                                    lineNumber: 578,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/messages/page.js",
                            lineNumber: 505,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                            className: "messages-right",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "messages-profile",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Avatar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            src: activeConversation?.otherUser?.avatarPath,
                                            name: activeConversation?.nickname?.nickname || activeConversation?.otherUser?.name || activeConversation?.otherUser?.email,
                                            size: 92,
                                            className: "messages-profile-avatar"
                                        }, void 0, false, {
                                            fileName: "[project]/app/messages/page.js",
                                            lineNumber: 645,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "messages-profile-name",
                                            children: activeConversation?.nickname?.nickname || activeConversation?.otherUser?.name || activeConversation?.otherUser?.email || '-'
                                        }, void 0, false, {
                                            fileName: "[project]/app/messages/page.js",
                                            lineNumber: 651,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "messages-profile-sub",
                                            children: "Hi there, I am using chat app"
                                        }, void 0, false, {
                                            fileName: "[project]/app/messages/page.js",
                                            lineNumber: 652,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/messages/page.js",
                                    lineNumber: 644,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "sidebar-section liquid-glass",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "sidebar-section-title",
                                            children: "Media"
                                        }, void 0, false, {
                                            fileName: "[project]/app/messages/page.js",
                                            lineNumber: 656,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "media-placeholder",
                                            children: "-"
                                        }, void 0, false, {
                                            fileName: "[project]/app/messages/page.js",
                                            lineNumber: 657,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/messages/page.js",
                                    lineNumber: 655,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "sidebar-section liquid-glass",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "sidebar-section-title",
                                            children: "เครื่องมือจัดการ"
                                        }, void 0, false, {
                                            fileName: "[project]/app/messages/page.js",
                                            lineNumber: 661,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "chat-management-actions",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "mgmt-btn",
                                                    onClick: handleBlock,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "mgmt-icon",
                                                            children: "🚫"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/messages/page.js",
                                                            lineNumber: 664,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "mgmt-label",
                                                            children: "บล็อก"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/messages/page.js",
                                                            lineNumber: 665,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/messages/page.js",
                                                    lineNumber: 663,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "mgmt-btn",
                                                    onClick: handleReport,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "mgmt-icon",
                                                            children: "🚩"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/messages/page.js",
                                                            lineNumber: 668,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "mgmt-label",
                                                            children: "รายงาน"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/messages/page.js",
                                                            lineNumber: 669,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/messages/page.js",
                                                    lineNumber: 667,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "mgmt-btn mgmt-btn-danger",
                                                    onClick: handleDeleteChat,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "mgmt-icon",
                                                            children: "🗑️"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/messages/page.js",
                                                            lineNumber: 672,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "mgmt-label",
                                                            children: "ลบแชท"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/messages/page.js",
                                                            lineNumber: 673,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/messages/page.js",
                                                    lineNumber: 671,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/messages/page.js",
                                            lineNumber: 662,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/messages/page.js",
                                    lineNumber: 660,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "logout-btn",
                                    onClick: ()=>signOut(),
                                    children: "Logout"
                                }, void 0, false, {
                                    fileName: "[project]/app/messages/page.js",
                                    lineNumber: 678,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/messages/page.js",
                            lineNumber: 643,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/messages/page.js",
                    lineNumber: 461,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/messages/page.js",
                lineNumber: 460,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NicknameModal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isNicknameModalOpen,
                onClose: ()=>setIsNicknameModalOpen(false),
                onSubmit: submitNickname,
                onReset: resetNickname,
                initialNickname: activeConversation?.nickname?.nickname || '',
                targetName: activeConversation?.otherUser?.name || activeConversation?.otherUser?.email
            }, void 0, false, {
                fileName: "[project]/app/messages/page.js",
                lineNumber: 684,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/messages/page.js",
        lineNumber: 459,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_c7e04a85._.js.map