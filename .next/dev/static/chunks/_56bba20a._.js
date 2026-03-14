(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/Toast.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ToastContainer,
    "toast",
    ()=>toast
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
let toastCount = 0;
let toastListeners = [];
const toast = {
    error: (message)=>notify(message, 'error'),
    success: (message)=>notify(message, 'success'),
    info: (message)=>notify(message, 'info')
};
const notify = (message, type)=>{
    const id = toastCount++;
    toastListeners.forEach((listener)=>listener({
            id,
            message,
            type
        }));
};
function ToastContainer() {
    _s();
    const [toasts, setToasts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ToastContainer.useEffect": ()=>{
            const addToast = {
                "ToastContainer.useEffect.addToast": (newToast)=>{
                    setToasts({
                        "ToastContainer.useEffect.addToast": (prev)=>[
                                ...prev,
                                newToast
                            ]
                    }["ToastContainer.useEffect.addToast"]);
                    setTimeout({
                        "ToastContainer.useEffect.addToast": ()=>{
                            setToasts({
                                "ToastContainer.useEffect.addToast": (prev)=>prev.filter({
                                        "ToastContainer.useEffect.addToast": (t)=>t.id !== newToast.id
                                    }["ToastContainer.useEffect.addToast"])
                            }["ToastContainer.useEffect.addToast"]);
                        }
                    }["ToastContainer.useEffect.addToast"], 5000);
                }
            }["ToastContainer.useEffect.addToast"];
            toastListeners.push(addToast);
            return ({
                "ToastContainer.useEffect": ()=>{
                    toastListeners = toastListeners.filter({
                        "ToastContainer.useEffect": (l)=>l !== addToast
                    }["ToastContainer.useEffect"]);
                }
            })["ToastContainer.useEffect"];
        }
    }["ToastContainer.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "toast-container",
        children: toasts.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `toast toast-${t.type} liquid-glass`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "toast-icon",
                        children: [
                            t.type === 'error' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "bi bi-exclamation-circle-fill"
                            }, void 0, false, {
                                fileName: "[project]/components/Toast.js",
                                lineNumber: 41,
                                columnNumber: 36
                            }, this),
                            t.type === 'success' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "bi bi-check-circle-fill"
                            }, void 0, false, {
                                fileName: "[project]/components/Toast.js",
                                lineNumber: 42,
                                columnNumber: 38
                            }, this),
                            t.type === 'info' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "bi bi-info-circle-fill"
                            }, void 0, false, {
                                fileName: "[project]/components/Toast.js",
                                lineNumber: 43,
                                columnNumber: 35
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Toast.js",
                        lineNumber: 40,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "toast-content",
                        children: t.message
                    }, void 0, false, {
                        fileName: "[project]/components/Toast.js",
                        lineNumber: 45,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "toast-close",
                        onClick: ()=>setToasts((prev)=>prev.filter((toast)=>toast.id !== t.id)),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                            className: "bi bi-x"
                        }, void 0, false, {
                            fileName: "[project]/components/Toast.js",
                            lineNumber: 47,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Toast.js",
                        lineNumber: 46,
                        columnNumber: 11
                    }, this)
                ]
            }, t.id, true, {
                fileName: "[project]/components/Toast.js",
                lineNumber: 39,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/Toast.js",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_s(ToastContainer, "oL0MrtDCqig+amxuKH2EOlnBcjg=");
_c = ToastContainer;
var _c;
__turbopack_context__.k.register(_c, "ToastContainer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/messages/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MessagesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Avatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Avatar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Toast.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$emoji$2d$picker$2d$react$2f$dist$2f$emoji$2d$picker$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/emoji-picker-react/dist/emoji-picker-react.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$giphy$2f$js$2d$fetch$2d$api$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@giphy/js-fetch-api/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$giphy$2f$react$2d$components$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@giphy/react-components/dist/esm/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
// Giphy API Key from Environment
const GIPHY_API_KEY = ("TURBOPACK compile-time value", "3mwQ1gkGL6ICkbyhlGhZHXLvQOIFsH0R") || 'sXpYse9LInpUfD9uPNoOhYInz2f3EwXU';
const gf = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$giphy$2f$js$2d$fetch$2d$api$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GiphyFetch"](GIPHY_API_KEY);
const GifPickerContent = ({ onGifClick })=>{
    _s();
    const { fetchGifs, searchKey } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useContext(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$giphy$2f$react$2d$components$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SearchContext"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$giphy$2f$react$2d$components$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SearchBar"], {
                className: "giphy-search-bar"
            }, void 0, false, {
                fileName: "[project]/app/messages/page.js",
                lineNumber: 22,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "giphy-grid-wrapper",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$giphy$2f$react$2d$components$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Grid"], {
                    columns: 2,
                    width: 460,
                    fetchGifs: fetchGifs,
                    onGifClick: onGifClick,
                    noLink: true,
                    hideAttribution: true
                }, searchKey, false, {
                    fileName: "[project]/app/messages/page.js",
                    lineNumber: 24,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/messages/page.js",
                lineNumber: 23,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s(GifPickerContent, "YwFvHI1RaZl5S42Y5VWUv72IM2E=");
_c = GifPickerContent;
const resolvePath = (raw)=>{
    if (!raw || typeof raw !== 'string') return '';
    if (raw.startsWith('http://') || raw.startsWith('https://')) return raw;
    return raw.startsWith('/') ? raw : `/${raw}`;
};
function MessagesPage() {
    _s1();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const [conversations, setConversations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [activeId, setActiveId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [draft, setDraft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [meId, setMeId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [unreadIds, setUnreadIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [loadingConversations, setLoadingConversations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [loadingMessages, setLoadingMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [sending, setSending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [uploading, setUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isScanning, setIsScanning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scanProgress, setScanProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [selectedFiles, setSelectedFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [previewUrls, setPreviewUrls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const looksLikeEicar = (text)=>{
        if (!text || typeof text !== 'string') return false;
        const s = text.trim();
        if (!s) return false;
        if (s.includes('EICAR-STANDARD-ANTIVIRUS-TEST-FILE')) return true;
        const eicarPattern = /X5O!P%@AP\[4\\PZX54\(P\^\)7CC\)7\}\$EICAR-STANDARD-ANTIVIRUS-TEST-FILE!\$H\+H\*/;
        return eicarPattern.test(s);
    };
    const precheckFilesForEicar = async (files)=>{
        const infected = [];
        for (const file of files){
            try {
                const bytes = await file.arrayBuffer();
                const view = new Uint8Array(bytes.slice(0, 4096));
                const text = new TextDecoder('utf-8', {
                    fatal: false
                }).decode(view);
                if (looksLikeEicar(text)) infected.push(file.name);
            } catch  {
            // ignore
            }
        }
        return infected;
    };
    const handleInfectedError = (err)=>{
        console.log('[Frontend] handleInfectedError called with error:', err);
        // รีเซ็ตสถานะการโหลดทั้งหมด
        setUploading(false);
        setIsScanning(false);
        setSending(false);
        setUploadProgress(0);
        setScanProgress(0);
        const fileList = err.files?.map((f)=>f.filename).join(', ') || 'ไฟล์แนบ';
        setConfirmConfig({
            title: 'ตรวจพบความเสี่ยง!',
            message: `ไฟล์ของคุณอาจจะเป็นไวรัส (${fileList}) คุณจะดำเนินการต่อไหม?`,
            onConfirm: ()=>{
                console.log('[Frontend] User confirmed. Retrying with confirmInfected...');
                setShowConfirmModal(false);
                // ส่งไฟล์เดิมอีกครั้งพร้อมแนบ flag ยืนยัน
                setTimeout(()=>{
                    handleSend(true);
                }, 200);
            },
            onCancel: ()=>{
                console.log('[Frontend] User canceled. Clearing selected files.');
                setShowConfirmModal(false);
                setSelectedFiles([]);
                setUploadProgress(0);
                setScanProgress(0);
                setUploading(false);
                setIsScanning(false);
                setSending(false);
            }
        });
        // บังคับแสดง Modal ทันที
        setShowConfirmModal(true);
    };
    const [showPlusMenu, setShowPlusMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showEmojiPicker, setShowEmojiPicker] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showGifPicker, setShowGifPicker] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const plusMenuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const emojiPickerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const gifPickerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MessagesPage.useEffect": ()=>{
            const handleClickOutside = {
                "MessagesPage.useEffect.handleClickOutside": (event)=>{
                    // Close plus menu
                    if (plusMenuRef.current && !plusMenuRef.current.contains(event.target)) {
                        setShowPlusMenu(false);
                    }
                    // Close emoji picker
                    if (emojiPickerRef.current && !emojiPickerRef.current.contains(event.target) && !event.target.closest('.plus-menu-item')) {
                        setShowEmojiPicker(false);
                    }
                    // Close gif picker
                    if (gifPickerRef.current && !gifPickerRef.current.contains(event.target) && !event.target.closest('.plus-menu-item')) {
                        setShowGifPicker(false);
                    }
                }
            }["MessagesPage.useEffect.handleClickOutside"];
            document.addEventListener('mousedown', handleClickOutside);
            return ({
                "MessagesPage.useEffect": ()=>document.removeEventListener('mousedown', handleClickOutside)
            })["MessagesPage.useEffect"];
        }
    }["MessagesPage.useEffect"], []);
    const onEmojiClick = (emojiData)=>{
        setDraft((prev)=>prev + emojiData.emoji);
    // setShowEmojiPicker(false) // Commented out to keep open after selection
    };
    const handleGifSelect = (gifUrl)=>{
        // Send GIF as a message
        handleSendGif(gifUrl);
        setShowGifPicker(false);
    };
    const handleSendGif = async (url)=>{
        if (!activeId) return;
        setSending(true);
        try {
            const res = await fetch(`/api/conversations/${activeId}/messages`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    body: url
                })
            });
            if (res.ok) {
                const created = await res.json();
                setMessages((prev)=>[
                        ...prev,
                        created
                    ]);
                await loadConversations();
            }
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('ไม่สามารถส่ง GIF ได้');
        } finally{
            setSending(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MessagesPage.useEffect": ()=>{
            if (selectedFiles.length === 0) {
                setPreviewUrls([]);
                return;
            }
            const urls = selectedFiles.map({
                "MessagesPage.useEffect.urls": (file)=>URL.createObjectURL(file)
            }["MessagesPage.useEffect.urls"]);
            setPreviewUrls(urls);
            return ({
                "MessagesPage.useEffect": ()=>urls.forEach({
                        "MessagesPage.useEffect": (url)=>URL.revokeObjectURL(url)
                    }["MessagesPage.useEffect"])
            })["MessagesPage.useEffect"];
        }
    }["MessagesPage.useEffect"], [
        selectedFiles
    ]);
    const lastCursorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pollTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const threadRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scrollToBottom = (behavior = 'smooth')=>{
        if (threadRef.current) {
            threadRef.current.scrollTo({
                top: threadRef.current.scrollHeight,
                behavior
            });
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MessagesPage.useEffect": ()=>{
            if (messages.length > 0) {
                scrollToBottom('smooth');
            }
        }
    }["MessagesPage.useEffect"], [
        messages
    ]);
    const activeConversation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MessagesPage.useMemo[activeConversation]": ()=>conversations.find({
                "MessagesPage.useMemo[activeConversation]": (c)=>c.id === activeId
            }["MessagesPage.useMemo[activeConversation]"]) || null
    }["MessagesPage.useMemo[activeConversation]"], [
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
    const formatFileSize = (bytes)=>{
        if (!bytes) return '0 B';
        const k = 1024;
        const sizes = [
            'B',
            'KB',
            'MB',
            'GB'
        ];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
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
        // Fetch blocks to determine status
        const blocksRes = await fetch('/api/conversations/blocks', {
            cache: 'no-store'
        });
        const blocksData = blocksRes.ok ? await blocksRes.json() : {
            blockedByMe: [],
            blockingMe: []
        };
        setConversations(list.map((c)=>{
            const isBlockedByMe = blocksData.blockedByMe?.includes(c.otherUser?.id);
            const isBlockingMe = blocksData.blockingMe?.includes(c.otherUser?.id);
            return {
                ...c,
                isBlockedByMe,
                isBlockingMe
            };
        }));
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MessagesPage.useEffect": ()=>{
            const timer = setInterval({
                "MessagesPage.useEffect.timer": ()=>{
                    loadConversations().catch({
                        "MessagesPage.useEffect.timer": ()=>{}
                    }["MessagesPage.useEffect.timer"]);
                }
            }["MessagesPage.useEffect.timer"], 5000);
            return ({
                "MessagesPage.useEffect": ()=>clearInterval(timer)
            })["MessagesPage.useEffect"];
        }
    }["MessagesPage.useEffect"], [
        activeId,
        meId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MessagesPage.useEffect": ()=>{
            let cancelled = false;
            const run = {
                "MessagesPage.useEffect.run": async ()=>{
                    setLoadingConversations(true);
                    try {
                        const list = await loadConversations();
                        if (cancelled) return;
                        const requested = searchParams?.get('c');
                        if (requested && list.some({
                            "MessagesPage.useEffect.run": (c)=>c.id === requested
                        }["MessagesPage.useEffect.run"])) {
                            setActiveId(requested);
                            return;
                        }
                        if (!activeId && list.length) setActiveId(list[0].id);
                    } catch  {
                    // ignore
                    } finally{
                        if (!cancelled) setLoadingConversations(false);
                    }
                }
            }["MessagesPage.useEffect.run"];
            run();
            return ({
                "MessagesPage.useEffect": ()=>{
                    cancelled = true;
                }
            })["MessagesPage.useEffect"];
        }
    }["MessagesPage.useEffect"], [
        searchParams
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MessagesPage.useEffect": ()=>{
            let cancelled = false;
            const loadMe = {
                "MessagesPage.useEffect.loadMe": async ()=>{
                    try {
                        const res = await fetch('/api/profile', {
                            cache: 'no-store'
                        });
                        if (!res.ok) return;
                        const data = await res.json().catch({
                            "MessagesPage.useEffect.loadMe": ()=>null
                        }["MessagesPage.useEffect.loadMe"]);
                        const id = data?.user?.id;
                        if (!cancelled && typeof id === 'string') setMeId(id);
                    } catch  {
                    // ignore
                    }
                }
            }["MessagesPage.useEffect.loadMe"];
            loadMe();
            return ({
                "MessagesPage.useEffect": ()=>{
                    cancelled = true;
                }
            })["MessagesPage.useEffect"];
        }
    }["MessagesPage.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MessagesPage.useEffect": ()=>{
            if (!activeId) return;
            setUnreadIds({
                "MessagesPage.useEffect": (prev)=>{
                    if (prev.has(activeId)) {
                        const next = new Set(prev);
                        next.delete(activeId);
                        return next;
                    }
                    return prev;
                }
            }["MessagesPage.useEffect"]);
            let stopped = false;
            lastCursorRef.current = null;
            setMessages([]);
            const start = {
                "MessagesPage.useEffect.start": async ()=>{
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
                    pollTimerRef.current = setInterval({
                        "MessagesPage.useEffect.start": ()=>{
                            pollNewMessages(activeId);
                        }
                    }["MessagesPage.useEffect.start"], 1500);
                }
            }["MessagesPage.useEffect.start"];
            start();
            return ({
                "MessagesPage.useEffect": ()=>{
                    stopped = true;
                    if (pollTimerRef.current) {
                        clearInterval(pollTimerRef.current);
                        pollTimerRef.current = null;
                    }
                }
            })["MessagesPage.useEffect"];
        }
    }["MessagesPage.useEffect"], [
        activeId
    ]);
    const [uploadProgress, setUploadProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MessagesPage.useEffect": ()=>{
            const timer = setInterval({
                "MessagesPage.useEffect.timer": ()=>{
                    if (isScanning && scanProgress < 95) {
                        setScanProgress({
                            "MessagesPage.useEffect.timer": (prev)=>{
                                const step = Math.random() * 5;
                                return Math.min(95, prev + step);
                            }
                        }["MessagesPage.useEffect.timer"]);
                    }
                }
            }["MessagesPage.useEffect.timer"], 800);
            return ({
                "MessagesPage.useEffect": ()=>clearInterval(timer)
            })["MessagesPage.useEffect"];
        }
    }["MessagesPage.useEffect"], [
        isScanning,
        scanProgress
    ]);
    const handleSend = async (confirmInfected = false)=>{
        if (!draft.trim() && selectedFiles.length === 0) return;
        if (!activeId) return;
        if (sending || uploading) return;
        const maxSize = 10 * 1024 * 1024 // 10MB
        ;
        for (const file of selectedFiles){
            if (file.size > maxSize) {
                __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(`ไฟล์ "${file.name}" มีขนาดใหญ่เกินไป (จำกัด 10MB)`);
                return;
            }
        }
        const body = draft.trim();
        setSending(true);
        try {
            if (selectedFiles.length > 0) {
                if (!confirmInfected) {
                    console.log('[Frontend] Running EICAR precheck for files:', selectedFiles.map((f)=>f?.name));
                    const infectedNames = await precheckFilesForEicar(selectedFiles);
                    console.log('[Frontend] EICAR precheck infectedNames:', infectedNames);
                    if (infectedNames.length > 0) {
                        handleInfectedError({
                            files: infectedNames.map((n)=>({
                                    filename: n
                                }))
                        });
                        return;
                    }
                }
                setUploading(true);
                setUploadProgress(0);
                setIsScanning(false);
                const fd = new FormData();
                selectedFiles.forEach((f)=>fd.append('files', f));
                if (body) fd.append('body', body);
                if (confirmInfected) fd.append('confirmInfected', 'true');
                console.log('[Frontend] Starting upload to API...');
                const isConfirm = Boolean(confirmInfected);
                // Wrap XHR in a promise for awaitable execution
                let responseData;
                try {
                    responseData = await new Promise((resolve, reject)=>{
                        const xhr = new XMLHttpRequest();
                        xhr.upload.addEventListener('progress', (e)=>{
                            if (e.lengthComputable) {
                                const percent = Math.round(e.loaded / e.total * 100);
                                setUploadProgress(percent);
                                if (percent === 100) {
                                    console.log('[Frontend] Upload finished, waiting for server scan...');
                                    setUploading(false);
                                    setIsScanning(true);
                                    setScanProgress(0);
                                    setUploadProgress(100);
                                }
                            }
                        });
                        xhr.onreadystatechange = ()=>{
                            if (xhr.readyState === 4) {
                                console.log('[Frontend] XHR ReadyState 4, status:', xhr.status);
                                let payload = {
                                    error: 'Unknown error'
                                };
                                try {
                                    if (xhr.responseText) {
                                        payload = JSON.parse(xhr.responseText);
                                    }
                                } catch (e) {
                                    console.error('[Frontend] Could not parse JSON response:', xhr.responseText);
                                    // ถ้า parse JSON ไม่ได้ ให้เช็คคำว่า INFECTED_FILES ใน text ดิบ
                                    if (xhr.responseText && xhr.responseText.includes('INFECTED_FILES')) {
                                        payload = {
                                            code: 'INFECTED_FILES',
                                            error: 'ตรวจพบไวรัส'
                                        };
                                    } else {
                                        payload = {
                                            error: xhr.responseText || 'Server error'
                                        };
                                    }
                                }
                                if (xhr.status >= 200 && xhr.status < 300) {
                                    resolve(payload);
                                } else {
                                    console.log('[Frontend] XHR Error payload:', payload);
                                    // ตรวจสอบ INFECTED_FILES จากทุกลู่ทาง
                                    const isVirus = payload && payload.code === 'INFECTED_FILES' || xhr.responseText && xhr.responseText.includes('INFECTED_FILES');
                                    if (isVirus) {
                                        payload.code = 'INFECTED_FILES';
                                        reject(payload);
                                    } else {
                                        reject(payload);
                                    }
                                }
                            }
                        };
                        xhr.addEventListener('error', ()=>{
                            console.error('[Frontend] XHR Network Error');
                            reject({
                                error: 'Network error'
                            });
                        });
                        xhr.open('POST', `/api/conversations/${activeId}/messages/attachments`);
                        xhr.send(fd);
                    });
                } catch (errPayload) {
                    console.log('[Frontend] Catch Block - Received Error Payload:', JSON.stringify(errPayload));
                    // Force reset states before handling error
                    setUploading(false);
                    setIsScanning(false);
                    setSending(false);
                    // ตรวจสอบทั้งกรณีเป็น Object หรือเป็น String ที่มีคำว่า INFECTED_FILES
                    const isVirus = errPayload && errPayload.code === 'INFECTED_FILES' || errPayload && errPayload.error && errPayload.error.includes('INFECTED_FILES') || typeof errPayload === 'string' && errPayload.includes('INFECTED_FILES') || typeof errPayload === 'object' && JSON.stringify(errPayload).includes('INFECTED_FILES');
                    if (isVirus) {
                        console.log('[Frontend] Virus detected in catch block, calling handleInfectedError');
                        handleInfectedError(errPayload || {
                            code: 'INFECTED_FILES'
                        });
                        return;
                    }
                    throw errPayload;
                }
                console.log('[Frontend] Success response:', responseData);
                setUploading(false);
                setIsScanning(false);
                setScanProgress(100);
                setDraft('');
                setSelectedFiles([]);
                await pollNewMessages(activeId);
                await loadConversations();
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
        } catch (err) {
            console.error('[Frontend] Send error caught:', err);
            setIsScanning(false);
            setUploading(false);
            setUploadProgress(0);
            if (err && (err.code === 'INFECTED_FILES' || err.error && err.error.includes('INFECTED_FILES') || typeof err === 'object' && JSON.stringify(err).includes('INFECTED_FILES') || typeof err === 'string' && err.includes('INFECTED_FILES'))) {
                handleInfectedError(err);
                return;
            }
            console.log('[Frontend] Non-virus error occurred:', err);
            __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(`ไม่สามารถส่งข้อความได้: ${err?.error || err?.message || 'เกิดข้อผิดพลาด'}`);
        } finally{
            setSending(false);
            setUploading(false);
            setUploadProgress(0);
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
    const [showNicknameModal, setShowNicknameModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [nicknameDraft, setNicknameDraft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const handleNickname = async ()=>{
        if (!activeConversation?.otherUser?.id) return;
        const currentNickname = activeConversation.nickname || '';
        setNicknameDraft(currentNickname);
        setShowNicknameModal(true);
    };
    const submitNickname = async (nameToSet)=>{
        try {
            const res = await fetch(`/api/conversations/${activeId}/nickname`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    targetUserId: activeConversation.otherUser.id,
                    nickname: nameToSet
                })
            });
            if (res.ok) {
                setShowNicknameModal(false);
                await loadConversations();
                __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success('เปลี่ยนชื่อเล่นเรียบร้อยแล้ว');
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('ไม่สามารถเปลี่ยนชื่อเล่นได้');
            }
        } catch (error) {
            console.error(error);
        }
    };
    const [showConfirmModal, setShowConfirmModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [confirmConfig, setConfirmConfig] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        title: '',
        message: '',
        onConfirm: {
            "MessagesPage.useState": ()=>{}
        }["MessagesPage.useState"]
    });
    const [showImageModal, setShowImageModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedImageUrl, setSelectedImageUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const openImageModal = (url)=>{
        setSelectedImageUrl(url);
        setShowImageModal(true);
    };
    const downloadFile = async (path, filename)=>{
        try {
            const response = await fetch(resolvePath(path));
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', filename);
            document.body.appendChild(link);
            link.click();
            link.remove();
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Download error:', error);
            __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('ไม่สามารถดาวน์โหลดไฟล์ได้');
        }
    };
    const handleBlock = async ()=>{
        if (!activeConversation?.otherUser?.id) return;
        const isCurrentlyBlocked = activeConversation.isBlockedByMe;
        setConfirmConfig({
            title: isCurrentlyBlocked ? 'เลิกบล็อกผู้ใช้' : 'บล็อกผู้ใช้',
            message: isCurrentlyBlocked ? 'คุณแน่ใจหรือไม่ที่จะเลิกบล็อกผู้ใช้นี้?' : 'คุณแน่ใจหรือไม่ที่จะบล็อกผู้ใช้นี้?',
            onConfirm: async ()=>{
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
                        await loadConversations();
                        setShowConfirmModal(false);
                        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(isCurrentlyBlocked ? 'เลิกบล็อกเรียบร้อยแล้ว' : 'บล็อกเรียบร้อยแล้ว');
                    } else {
                        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('เกิดข้อผิดพลาดในการดำเนินการ');
                    }
                } catch (error) {
                    console.error(error);
                }
            }
        });
        setShowConfirmModal(true);
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
                __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success('ส่งรายงานเรียบร้อยแล้ว ขอบคุณที่ช่วยดูแลชุมชนของเรา');
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('เกิดข้อผิดพลาดในการส่งรายงาน');
            }
        } catch (error) {
            console.error(error);
        }
    };
    const handleDeleteChat = async ()=>{
        if (!activeId) return;
        setConfirmConfig({
            title: 'ลบแชท',
            message: 'คุณแน่ใจหรือไม่ที่จะลบแชทนี้? การลบจะมีผลกับทั้งสองฝ่ายและไม่สามารถกู้คืนได้',
            onConfirm: async ()=>{
                try {
                    const res = await fetch(`/api/conversations/${activeId}`, {
                        method: 'DELETE'
                    });
                    if (res.ok) {
                        setActiveId(null);
                        loadConversations();
                        setShowConfirmModal(false);
                        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success('ลบแชทเรียบร้อยแล้ว');
                    } else {
                        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('เกิดข้อผิดพลาดในการลบแชท');
                    }
                } catch (error) {
                    console.error(error);
                }
            }
        });
        setShowConfirmModal(true);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "messages-wrap",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/messages/page.js",
                lineNumber: 999,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "messages-shell liquid-glass",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "messages-grid",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                            className: "messages-left",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "messages-brand",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "messages-brand-icon",
                                            children: "..."
                                        }, void 0, false, {
                                            fileName: "[project]/app/messages/page.js",
                                            lineNumber: 1004,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "messages-brand-title",
                                            children: "QuickChat"
                                        }, void 0, false, {
                                            fileName: "[project]/app/messages/page.js",
                                            lineNumber: 1005,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "messages-brand-more",
                                            type: "button",
                                            "aria-label": "More",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: "bi bi-three-dots-vertical"
                                            }, void 0, false, {
                                                fileName: "[project]/app/messages/page.js",
                                                lineNumber: 1007,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/messages/page.js",
                                            lineNumber: 1006,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/messages/page.js",
                                    lineNumber: 1003,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "messages-search",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            className: "bi bi-search"
                                        }, void 0, false, {
                                            fileName: "[project]/app/messages/page.js",
                                            lineNumber: 1012,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            placeholder: "Search User...",
                                            value: '',
                                            onChange: ()=>{}
                                        }, void 0, false, {
                                            fileName: "[project]/app/messages/page.js",
                                            lineNumber: 1013,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/messages/page.js",
                                    lineNumber: 1011,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "messages-list",
                                    children: loadingConversations ? null : conversations.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: `messages-item ${c.id === activeId ? 'active' : ''} ${c.unreadCount > 0 ? 'unread' : ''}`,
                                            onClick: ()=>setActiveId(c.id),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "messages-avatar-wrapper",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `avatar-container ${c.isBlockedByMe || c.isBlockingMe ? 'blocked' : ''}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Avatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    src: c.otherUser?.avatarPath,
                                                                    name: c.otherUser?.name || c.otherUser?.email,
                                                                    size: 42,
                                                                    className: "messages-avatar"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/messages/page.js",
                                                                    lineNumber: 1026,
                                                                    columnNumber: 23
                                                                }, this),
                                                                (c.isBlockedByMe || c.isBlockingMe) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "blocked-overlay",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                        className: "bi bi-slash-circle"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/messages/page.js",
                                                                        lineNumber: 1034,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/messages/page.js",
                                                                    lineNumber: 1033,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/messages/page.js",
                                                            lineNumber: 1025,
                                                            columnNumber: 21
                                                        }, this),
                                                        c.unreadCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "messages-new-badge",
                                                            children: c.unreadCount
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/messages/page.js",
                                                            lineNumber: 1038,
                                                            columnNumber: 43
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/messages/page.js",
                                                    lineNumber: 1024,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "messages-item-meta",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "messages-item-name",
                                                        children: c.otherUser?.name || c.otherUser?.email || '-'
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/messages/page.js",
                                                        lineNumber: 1041,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/messages/page.js",
                                                    lineNumber: 1040,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, c.id, true, {
                                            fileName: "[project]/app/messages/page.js",
                                            lineNumber: 1018,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/messages/page.js",
                                    lineNumber: 1016,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/messages/page.js",
                            lineNumber: 1002,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "messages-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "messages-topbar",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "messages-topbar-left",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Avatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: activeConversation?.otherUser?.avatarPath,
                                                    name: activeConversation?.otherUser?.name || activeConversation?.otherUser?.email,
                                                    size: 42,
                                                    className: `messages-avatar ${activeConversation?.isBlockedByMe || activeConversation?.isBlockingMe ? 'blocked' : ''}`
                                                }, void 0, false, {
                                                    fileName: "[project]/app/messages/page.js",
                                                    lineNumber: 1051,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "messages-topbar-name",
                                                            children: activeConversation?.otherUser?.name || activeConversation?.otherUser?.email || '-'
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/messages/page.js",
                                                            lineNumber: 1058,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "messages-topbar-sub",
                                                            children: " "
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/messages/page.js",
                                                            lineNumber: 1059,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/messages/page.js",
                                                    lineNumber: 1057,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/messages/page.js",
                                            lineNumber: 1050,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "messages-topbar-right",
                                            children: activeConversation?.otherUser && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "messages-topbar-actions",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "topbar-icon-btn",
                                                        onClick: handleNickname,
                                                        title: "เปลี่ยนชื่อเล่น",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                            className: "bi bi-pencil-square"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/messages/page.js",
                                                            lineNumber: 1067,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/messages/page.js",
                                                        lineNumber: 1066,
                                                        columnNumber: 21
                                                    }, this),
                                                    !activeConversation.isBlockingMe && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: `topbar-icon-btn ${activeConversation.isBlockedByMe ? 'active-blocked' : ''}`,
                                                        onClick: handleBlock,
                                                        title: activeConversation.isBlockedByMe ? "เลิกบล็อก" : "บล็อก",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                            className: `bi ${activeConversation.isBlockedByMe ? 'bi-check-circle' : 'bi-slash-circle'}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/messages/page.js",
                                                            lineNumber: 1075,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/messages/page.js",
                                                        lineNumber: 1070,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "topbar-icon-btn",
                                                        onClick: handleReport,
                                                        title: "รายงาน",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                            className: "bi bi-flag"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/messages/page.js",
                                                            lineNumber: 1079,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/messages/page.js",
                                                        lineNumber: 1078,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "topbar-icon-btn btn-danger",
                                                        onClick: handleDeleteChat,
                                                        title: "ลบแชท",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                            className: "bi bi-trash"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/messages/page.js",
                                                            lineNumber: 1082,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/messages/page.js",
                                                        lineNumber: 1081,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: `/profile/${activeConversation.otherUser.id}`,
                                                        className: "topbar-icon-btn",
                                                        title: "View Profile",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                            className: "bi bi-person-circle"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/messages/page.js",
                                                            lineNumber: 1089,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/messages/page.js",
                                                        lineNumber: 1084,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/messages/page.js",
                                                lineNumber: 1065,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/messages/page.js",
                                            lineNumber: 1063,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/messages/page.js",
                                    lineNumber: 1049,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "messages-thread",
                                    ref: threadRef,
                                    children: [
                                        loadingMessages ? null : messages.map((m)=>{
                                            const fromMe = !!meId && m.senderId === meId;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `messages-bubble-row ${m.senderId === 'system' ? 'system' : fromMe ? 'me' : 'them'}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `messages-bubble ${m.senderId === 'system' ? 'system' : fromMe ? 'me' : 'them'} ${m.attachments && m.attachments.length > 0 && !m.body ? 'attachment-only' : ''} ${m.isError ? 'error' : ''}`,
                                                    children: [
                                                        m.attachments && m.attachments.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "messages-bubble-attachments",
                                                            children: m.attachments.map((att)=>{
                                                                const isImage = att.mimeType && att.mimeType.startsWith('image/') || att.filename && (att.filename.toLowerCase().endsWith('.jpg') || att.filename.toLowerCase().endsWith('.jpeg') || att.filename.toLowerCase().endsWith('.png') || att.filename.toLowerCase().endsWith('.gif') || att.filename.toLowerCase().endsWith('.webp'));
                                                                const isVideo = att.mimeType && att.mimeType === 'video/mp4' || att.filename && att.filename.toLowerCase().endsWith('.mp4');
                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "messages-attachment-item",
                                                                    children: isImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "messages-attachment-container discord-style image-type",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "messages-attachment-img-wrapper",
                                                                                onClick: ()=>openImageModal(resolvePath(att.path)),
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                    src: resolvePath(att.path),
                                                                                    alt: att.filename || 'image',
                                                                                    className: "messages-attachment-img"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/messages/page.js",
                                                                                    lineNumber: 1132,
                                                                                    columnNumber: 43
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/messages/page.js",
                                                                                lineNumber: 1128,
                                                                                columnNumber: 41
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                className: "attachment-download-btn visible",
                                                                                onClick: (e)=>{
                                                                                    e.stopPropagation();
                                                                                    downloadFile(att.path, att.filename || 'image.jpg');
                                                                                },
                                                                                title: "Download",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                    className: "bi bi-download"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/messages/page.js",
                                                                                    lineNumber: 1142,
                                                                                    columnNumber: 43
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/messages/page.js",
                                                                                lineNumber: 1134,
                                                                                columnNumber: 41
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/messages/page.js",
                                                                        lineNumber: 1127,
                                                                        columnNumber: 39
                                                                    }, this) : isVideo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "messages-attachment-container discord-style video-type",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                                                                src: resolvePath(att.path),
                                                                                controls: true,
                                                                                className: "messages-attachment-video",
                                                                                preload: "metadata",
                                                                                children: "Your browser does not support the video tag."
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/messages/page.js",
                                                                                lineNumber: 1147,
                                                                                columnNumber: 41
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                className: "attachment-download-btn visible",
                                                                                onClick: (e)=>{
                                                                                    e.stopPropagation();
                                                                                    downloadFile(att.path, att.filename || 'video.mp4');
                                                                                },
                                                                                title: "Download",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                    className: "bi bi-download"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/messages/page.js",
                                                                                    lineNumber: 1163,
                                                                                    columnNumber: 43
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/messages/page.js",
                                                                                lineNumber: 1155,
                                                                                columnNumber: 41
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/messages/page.js",
                                                                        lineNumber: 1146,
                                                                        columnNumber: 39
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "messages-attachment-container discord-style",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "messages-attachment-discord",
                                                                                onClick: ()=>downloadFile(att.path, att.filename || 'file'),
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "discord-file-icon",
                                                                                        children: att.filename && (att.filename.toLowerCase().endsWith('.zip') || att.filename.toLowerCase().endsWith('.rar') || att.filename.toLowerCase().endsWith('.7z')) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                            className: "bi bi-file-earmark-zip-fill"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/messages/page.js",
                                                                                            lineNumber: 1174,
                                                                                            columnNumber: 47
                                                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                            className: "bi bi-file-earmark-text-fill"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/messages/page.js",
                                                                                            lineNumber: 1176,
                                                                                            columnNumber: 47
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/messages/page.js",
                                                                                        lineNumber: 1172,
                                                                                        columnNumber: 43
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "discord-file-info",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "discord-file-name",
                                                                                                children: att.filename || 'ไฟล์แนบ'
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/messages/page.js",
                                                                                                lineNumber: 1180,
                                                                                                columnNumber: 45
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "discord-file-size",
                                                                                                children: formatFileSize(att.size || 0)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/messages/page.js",
                                                                                                lineNumber: 1181,
                                                                                                columnNumber: 45
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/app/messages/page.js",
                                                                                        lineNumber: 1179,
                                                                                        columnNumber: 43
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/messages/page.js",
                                                                                lineNumber: 1168,
                                                                                columnNumber: 41
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                className: "attachment-download-btn visible",
                                                                                onClick: (e)=>{
                                                                                    e.stopPropagation();
                                                                                    downloadFile(att.path, att.filename || 'file');
                                                                                },
                                                                                title: "Download",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                    className: "bi bi-download"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/messages/page.js",
                                                                                    lineNumber: 1192,
                                                                                    columnNumber: 43
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/messages/page.js",
                                                                                lineNumber: 1184,
                                                                                columnNumber: 41
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/messages/page.js",
                                                                        lineNumber: 1167,
                                                                        columnNumber: 39
                                                                    }, this)
                                                                }, att.id, false, {
                                                                    fileName: "[project]/app/messages/page.js",
                                                                    lineNumber: 1125,
                                                                    columnNumber: 35
                                                                }, this);
                                                            })
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/messages/page.js",
                                                            lineNumber: 1110,
                                                            columnNumber: 29
                                                        }, this),
                                                        m.body && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "messages-bubble-text",
                                                            children: m.body.startsWith('https://media') && m.body.includes('giphy.com') ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "giphy-message-wrapper",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                    src: m.body,
                                                                    alt: "GIF",
                                                                    className: "giphy-message-img",
                                                                    onClick: ()=>openImageModal(m.body)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/messages/page.js",
                                                                    lineNumber: 1205,
                                                                    columnNumber: 35
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/messages/page.js",
                                                                lineNumber: 1204,
                                                                columnNumber: 33
                                                            }, this) : m.body
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/messages/page.js",
                                                            lineNumber: 1202,
                                                            columnNumber: 29
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "messages-bubble-footer",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "messages-bubble-time",
                                                                    children: formatTime(m.createdAt)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/messages/page.js",
                                                                    lineNumber: 1220,
                                                                    columnNumber: 29
                                                                }, this),
                                                                fromMe && m.readAt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "messages-seen-status",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                            className: "bi bi-check2-all"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/messages/page.js",
                                                                            lineNumber: 1226,
                                                                            columnNumber: 33
                                                                        }, this),
                                                                        " อ่านแล้ว"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/messages/page.js",
                                                                    lineNumber: 1224,
                                                                    columnNumber: 31
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/messages/page.js",
                                                            lineNumber: 1218,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/messages/page.js",
                                                    lineNumber: 1108,
                                                    columnNumber: 25
                                                }, this)
                                            }, m.id, false, {
                                                fileName: "[project]/app/messages/page.js",
                                                lineNumber: 1107,
                                                columnNumber: 23
                                            }, this);
                                        }),
                                        loadingMessages ? null : !messages.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "messages-empty",
                                            children: "ยังไม่มีข้อความ"
                                        }, void 0, false, {
                                            fileName: "[project]/app/messages/page.js",
                                            lineNumber: 1244,
                                            columnNumber: 60
                                        }, this) : null
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/messages/page.js",
                                    lineNumber: 1096,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "messages-composer",
                                    children: activeConversation?.isBlockedByMe || activeConversation?.isBlockingMe ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "blocked-composer-notice liquid-glass",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: "bi bi-exclamation-circle"
                                            }, void 0, false, {
                                                fileName: "[project]/app/messages/page.js",
                                                lineNumber: 1253,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: activeConversation.isBlockedByMe ? 'คุณได้บล็อกผู้ใช้นี้ไว้ ไม่สามารถส่งข้อความได้' : 'คุณไม่สามารถส่งข้อความถึงผู้ใช้นี้ได้'
                                            }, void 0, false, {
                                                fileName: "[project]/app/messages/page.js",
                                                lineNumber: 1254,
                                                columnNumber: 19
                                            }, this),
                                            activeConversation.isBlockedByMe && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "unblock-link-btn",
                                                onClick: handleBlock,
                                                children: "เลิกบล็อก"
                                            }, void 0, false, {
                                                fileName: "[project]/app/messages/page.js",
                                                lineNumber: 1260,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/messages/page.js",
                                        lineNumber: 1252,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            previewUrls.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "messages-previews",
                                                children: previewUrls.map((url, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "messages-preview-item",
                                                        children: [
                                                            selectedFiles[idx]?.type?.startsWith('image/') ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: url,
                                                                alt: ""
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/messages/page.js",
                                                                lineNumber: 1270,
                                                                columnNumber: 29
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "file-preview-icon",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                        className: "bi bi-file-earmark-text"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/messages/page.js",
                                                                        lineNumber: 1273,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "file-preview-name",
                                                                        children: selectedFiles[idx]?.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/messages/page.js",
                                                                        lineNumber: 1274,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/messages/page.js",
                                                                lineNumber: 1272,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>removeFile(idx),
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                    className: "bi bi-x"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/messages/page.js",
                                                                    lineNumber: 1278,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/messages/page.js",
                                                                lineNumber: 1277,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, url, true, {
                                                        fileName: "[project]/app/messages/page.js",
                                                        lineNumber: 1268,
                                                        columnNumber: 25
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/messages/page.js",
                                                lineNumber: 1266,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "messages-composer-inner",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "file",
                                                        ref: fileInputRef,
                                                        onChange: handleFileSelect,
                                                        multiple: true,
                                                        style: {
                                                            display: 'none'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/messages/page.js",
                                                        lineNumber: 1285,
                                                        columnNumber: 21
                                                    }, this),
                                                    (uploading || isScanning) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `upload-progress-bar ${isScanning ? 'scanning' : ''}`,
                                                        style: {
                                                            width: `${isScanning ? scanProgress : uploadProgress}%`
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/messages/page.js",
                                                        lineNumber: 1293,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "plus-menu-wrapper",
                                                        ref: plusMenuRef,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: `messages-icon-btn ${showPlusMenu ? 'active' : ''}`,
                                                                type: "button",
                                                                "aria-label": "Plus Menu",
                                                                onClick: ()=>setShowPlusMenu(!showPlusMenu),
                                                                disabled: uploading || isScanning,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                    className: `bi ${uploading || isScanning ? 'bi-hourglass-split' : 'bi-plus-lg'}`
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/messages/page.js",
                                                                    lineNumber: 1306,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/messages/page.js",
                                                                lineNumber: 1299,
                                                                columnNumber: 23
                                                            }, this),
                                                            showPlusMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "plus-menu liquid-glass",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        className: "plus-menu-item",
                                                                        onClick: ()=>{
                                                                            fileInputRef.current?.click();
                                                                            setShowPlusMenu(false);
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                className: "bi bi-file-earmark-arrow-up"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/messages/page.js",
                                                                                lineNumber: 1312,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: "อัปโหลดไฟล์"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/messages/page.js",
                                                                                lineNumber: 1313,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/messages/page.js",
                                                                        lineNumber: 1311,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        className: "plus-menu-item",
                                                                        onClick: ()=>{
                                                                            setShowEmojiPicker(true);
                                                                            setShowPlusMenu(false);
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                className: "bi bi-emoji-smile"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/messages/page.js",
                                                                                lineNumber: 1316,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: "อิโมจิ"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/messages/page.js",
                                                                                lineNumber: 1317,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/messages/page.js",
                                                                        lineNumber: 1315,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        className: "plus-menu-item",
                                                                        onClick: ()=>{
                                                                            setShowGifPicker(true);
                                                                            setShowPlusMenu(false);
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                className: "bi bi-filetype-gif"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/messages/page.js",
                                                                                lineNumber: 1320,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: "GIF"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/messages/page.js",
                                                                                lineNumber: 1321,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/messages/page.js",
                                                                        lineNumber: 1319,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/messages/page.js",
                                                                lineNumber: 1310,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/messages/page.js",
                                                        lineNumber: 1298,
                                                        columnNumber: 21
                                                    }, this),
                                                    showEmojiPicker && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "emoji-picker-container",
                                                        ref: emojiPickerRef,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "emoji-picker-inner",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$emoji$2d$picker$2d$react$2f$dist$2f$emoji$2d$picker$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                onEmojiClick: onEmojiClick,
                                                                theme: "dark"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/messages/page.js",
                                                                lineNumber: 1330,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/messages/page.js",
                                                            lineNumber: 1329,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/messages/page.js",
                                                        lineNumber: 1328,
                                                        columnNumber: 23
                                                    }, this),
                                                    showGifPicker && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "gif-picker-container",
                                                        ref: gifPickerRef,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "gif-picker-inner liquid-glass",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "gif-picker-header",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "GIPHY"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/messages/page.js",
                                                                            lineNumber: 1339,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            className: "gif-picker-close",
                                                                            onClick: ()=>setShowGifPicker(false),
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                className: "bi bi-x"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/messages/page.js",
                                                                                lineNumber: 1341,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/messages/page.js",
                                                                            lineNumber: 1340,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/messages/page.js",
                                                                    lineNumber: 1338,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$giphy$2f$react$2d$components$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SearchContextManager"], {
                                                                    apiKey: GIPHY_API_KEY,
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GifPickerContent, {
                                                                        onGifClick: (gif, e)=>{
                                                                            e.preventDefault();
                                                                            handleGifSelect(gif.images.fixed_height.url);
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/messages/page.js",
                                                                        lineNumber: 1345,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/messages/page.js",
                                                                    lineNumber: 1344,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/messages/page.js",
                                                            lineNumber: 1337,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/messages/page.js",
                                                        lineNumber: 1336,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        className: "messages-input",
                                                        placeholder: isScanning ? `กำลังตรวจสอบไวรัส... ${Math.round(scanProgress)}%` : uploading ? `กำลังอัปโหลด... ${uploadProgress}%` : "พิมพ์ข้อความ...",
                                                        value: draft,
                                                        onChange: (e)=>{
                                                            setDraft(e.target.value);
                                                            e.target.style.height = 'auto';
                                                            e.target.style.height = `${e.target.scrollHeight}px`;
                                                        },
                                                        disabled: uploading || isScanning,
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
                                                        lineNumber: 1353,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "messages-send",
                                                        type: "button",
                                                        onClick: ()=>handleSend(),
                                                        "aria-label": "Send",
                                                        disabled: sending || uploading || !draft.trim() && selectedFiles.length === 0,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                            className: "bi bi-send-fill"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/messages/page.js",
                                                            lineNumber: 1374,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/messages/page.js",
                                                        lineNumber: 1373,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/messages/page.js",
                                                lineNumber: 1284,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true)
                                }, void 0, false, {
                                    fileName: "[project]/app/messages/page.js",
                                    lineNumber: 1250,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/messages/page.js",
                            lineNumber: 1048,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                            className: "messages-right",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "messages-profile",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Avatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: activeConversation?.otherUser?.avatarPath,
                                        name: activeConversation?.otherUser?.name || activeConversation?.otherUser?.email,
                                        size: 92,
                                        className: "messages-profile-avatar"
                                    }, void 0, false, {
                                        fileName: "[project]/app/messages/page.js",
                                        lineNumber: 1387,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "messages-profile-name",
                                        children: activeConversation?.otherUser?.name || activeConversation?.otherUser?.email || '-'
                                    }, void 0, false, {
                                        fileName: "[project]/app/messages/page.js",
                                        lineNumber: 1393,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "messages-profile-sub",
                                        children: "Hi there, I am using chat app"
                                    }, void 0, false, {
                                        fileName: "[project]/app/messages/page.js",
                                        lineNumber: 1394,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/messages/page.js",
                                lineNumber: 1386,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/messages/page.js",
                            lineNumber: 1385,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/messages/page.js",
                    lineNumber: 1001,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/messages/page.js",
                lineNumber: 1000,
                columnNumber: 7
            }, this),
            showNicknameModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "modal-overlay",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "modal-content liquid-glass",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "modal-title",
                            children: "เปลี่ยนชื่อเล่น"
                        }, void 0, false, {
                            fileName: "[project]/app/messages/page.js",
                            lineNumber: 1403,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "modal-subtitle",
                            children: [
                                "ป้อนชื่อเล่นสำหรับ ",
                                activeConversation?.otherUser?.name || activeConversation?.otherUser?.email
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/messages/page.js",
                            lineNumber: 1404,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            className: "modal-input",
                            value: nicknameDraft,
                            onChange: (e)=>setNicknameDraft(e.target.value),
                            placeholder: "ชื่อเล่น...",
                            autoFocus: true
                        }, void 0, false, {
                            fileName: "[project]/app/messages/page.js",
                            lineNumber: 1405,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "modal-actions",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "modal-btn modal-btn-secondary",
                                    onClick: ()=>setShowNicknameModal(false),
                                    children: "ยกเลิก"
                                }, void 0, false, {
                                    fileName: "[project]/app/messages/page.js",
                                    lineNumber: 1414,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "modal-btn modal-btn-outline",
                                    onClick: ()=>submitNickname(''),
                                    children: "คืนค่าชื่อเดิม"
                                }, void 0, false, {
                                    fileName: "[project]/app/messages/page.js",
                                    lineNumber: 1415,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "modal-btn modal-btn-primary",
                                    onClick: ()=>submitNickname(nicknameDraft),
                                    children: "ตกลง"
                                }, void 0, false, {
                                    fileName: "[project]/app/messages/page.js",
                                    lineNumber: 1416,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/messages/page.js",
                            lineNumber: 1413,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/messages/page.js",
                    lineNumber: 1402,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/messages/page.js",
                lineNumber: 1401,
                columnNumber: 9
            }, this),
            showConfirmModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "modal-overlay",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "modal-content liquid-glass",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "modal-icon-header",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "bi bi-exclamation-triangle-fill text-warning"
                            }, void 0, false, {
                                fileName: "[project]/app/messages/page.js",
                                lineNumber: 1425,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/messages/page.js",
                            lineNumber: 1424,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "modal-title",
                            children: confirmConfig.title
                        }, void 0, false, {
                            fileName: "[project]/app/messages/page.js",
                            lineNumber: 1427,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "modal-subtitle",
                            children: confirmConfig.message
                        }, void 0, false, {
                            fileName: "[project]/app/messages/page.js",
                            lineNumber: 1428,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "modal-actions-grid",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "modal-btn modal-btn-secondary",
                                    onClick: ()=>confirmConfig.onCancel ? confirmConfig.onCancel() : setShowConfirmModal(false),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            className: "bi bi-x-lg"
                                        }, void 0, false, {
                                            fileName: "[project]/app/messages/page.js",
                                            lineNumber: 1434,
                                            columnNumber: 17
                                        }, this),
                                        " ไม่ส่ง"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/messages/page.js",
                                    lineNumber: 1430,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "modal-btn modal-btn-primary danger",
                                    onClick: confirmConfig.onConfirm,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            className: "bi bi-send-fill"
                                        }, void 0, false, {
                                            fileName: "[project]/app/messages/page.js",
                                            lineNumber: 1437,
                                            columnNumber: 17
                                        }, this),
                                        " ส่ง"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/messages/page.js",
                                    lineNumber: 1436,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/messages/page.js",
                            lineNumber: 1429,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/messages/page.js",
                    lineNumber: 1423,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/messages/page.js",
                lineNumber: 1422,
                columnNumber: 9
            }, this),
            showImageModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "modal-overlay image-modal-overlay",
                onClick: ()=>setShowImageModal(false),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "modal-close-btn",
                        onClick: ()=>setShowImageModal(false),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                            className: "bi bi-x-lg"
                        }, void 0, false, {
                            fileName: "[project]/app/messages/page.js",
                            lineNumber: 1446,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/messages/page.js",
                        lineNumber: 1445,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "image-modal-content",
                        onClick: (e)=>e.stopPropagation(),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: selectedImageUrl,
                                alt: "Preview",
                                className: "image-modal-img"
                            }, void 0, false, {
                                fileName: "[project]/app/messages/page.js",
                                lineNumber: 1449,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "image-modal-download-btn",
                                onClick: ()=>{
                                    const filename = selectedImageUrl.split('/').pop() || 'download.jpg';
                                    downloadFile(selectedImageUrl, filename);
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: "bi bi-download"
                                    }, void 0, false, {
                                        fileName: "[project]/app/messages/page.js",
                                        lineNumber: 1457,
                                        columnNumber: 15
                                    }, this),
                                    " ดาวน์โหลดรูปภาพ"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/messages/page.js",
                                lineNumber: 1450,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/messages/page.js",
                        lineNumber: 1448,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/messages/page.js",
                lineNumber: 1444,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/messages/page.js",
        lineNumber: 998,
        columnNumber: 5
    }, this);
}
_s1(MessagesPage, "qsuRD/pHm7bkLcc+4UJvvRl7NaM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c1 = MessagesPage;
var _c, _c1;
__turbopack_context__.k.register(_c, "GifPickerContent");
__turbopack_context__.k.register(_c1, "MessagesPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_56bba20a._.js.map