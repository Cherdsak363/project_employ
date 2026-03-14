module.exports = [
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
'use client';
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
    const [uploadProgress, setUploadProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const handleSend = async ()=>{
        if (!draft.trim() && selectedFiles.length === 0) return;
        if (!activeId) return;
        if (sending || uploading) return;
        const maxSize = 10 * 1024 * 1024 // 10MB
        ;
        for (const file of selectedFiles){
            if (file.size > maxSize) {
                alert(`ไฟล์ "${file.name}" มีขนาดใหญ่เกินไป (จำกัด 10MB)`);
                return;
            }
        }
        const body = draft.trim();
        setSending(true);
        try {
            if (selectedFiles.length > 0) {
                setUploading(true);
                setUploadProgress(0);
                const fd = new FormData();
                selectedFiles.forEach((f)=>fd.append('files', f));
                if (body) fd.append('body', body);
                // Use XMLHttpRequest for progress tracking
                const xhr = new XMLHttpRequest();
                const promise = new Promise((resolve, reject)=>{
                    xhr.upload.addEventListener('progress', (e)=>{
                        if (e.lengthComputable) {
                            const percent = Math.round(e.loaded / e.total * 100);
                            setUploadProgress(percent);
                        }
                    });
                    xhr.addEventListener('load', ()=>{
                        if (xhr.status >= 200 && xhr.status < 300) {
                            resolve(xhr.response);
                        } else {
                            let errorMsg = 'Upload failed';
                            try {
                                const res = JSON.parse(xhr.responseText);
                                if (res.error) errorMsg = res.error;
                            } catch (e) {}
                            reject(new Error(errorMsg));
                        }
                    });
                    xhr.addEventListener('error', ()=>reject(new Error('Network error')));
                    xhr.addEventListener('abort', ()=>reject(new Error('Upload aborted')));
                });
                xhr.open('POST', `/api/conversations/${activeId}/messages/attachments`);
                xhr.send(fd);
                try {
                    await promise;
                    setDraft('');
                    setSelectedFiles([]);
                    setUploadProgress(0);
                    await pollNewMessages(activeId);
                    await loadConversations();
                } catch (err) {
                    // Instead of alert, add a system error message to the thread
                    const errorMsg = {
                        id: `err-${Date.now()}`,
                        body: `ไม่สามารถส่งไฟล์ได้: ${err.message || 'เกิดข้อผิดพลาดในการอัปโหลด'}`,
                        createdAt: new Date().toISOString(),
                        senderId: 'system',
                        isError: true
                    };
                    setMessages((prev)=>[
                            ...prev,
                            errorMsg
                        ]);
                    setUploadProgress(0);
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
    const [showNicknameModal, setShowNicknameModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [nicknameDraft, setNicknameDraft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
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
            } else {
                alert('ไม่สามารถเปลี่ยนชื่อเล่นได้');
            }
        } catch (error) {
            console.error(error);
        }
    };
    const [showConfirmModal, setShowConfirmModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [confirmConfig, setConfirmConfig] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        title: '',
        message: '',
        onConfirm: ()=>{}
    });
    const [showImageModal, setShowImageModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedImageUrl, setSelectedImageUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
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
            alert('ไม่สามารถดาวน์โหลดไฟล์ได้');
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
                    } else {
                        alert('เกิดข้อผิดพลาดในการดำเนินการ');
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
                    } else {
                        alert('เกิดข้อผิดพลาดในการลบแชท');
                    }
                } catch (error) {
                    console.error(error);
                }
            }
        });
        setShowConfirmModal(true);
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
                                            lineNumber: 786,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "messages-brand-title",
                                            children: "QuickChat"
                                        }, void 0, false, {
                                            fileName: "[project]/app/messages/page.js",
                                            lineNumber: 787,
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
                                                lineNumber: 789,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/messages/page.js",
                                            lineNumber: 788,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/messages/page.js",
                                    lineNumber: 785,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "messages-search",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            className: "bi bi-search"
                                        }, void 0, false, {
                                            fileName: "[project]/app/messages/page.js",
                                            lineNumber: 794,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            placeholder: "Search User...",
                                            value: '',
                                            onChange: ()=>{}
                                        }, void 0, false, {
                                            fileName: "[project]/app/messages/page.js",
                                            lineNumber: 795,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/messages/page.js",
                                    lineNumber: 793,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "messages-list",
                                    children: loadingConversations ? null : conversations.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: `messages-item ${c.id === activeId ? 'active' : ''} ${c.unreadCount > 0 ? 'unread' : ''}`,
                                            onClick: ()=>setActiveId(c.id),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "messages-avatar-wrapper",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `avatar-container ${c.isBlockedByMe || c.isBlockingMe ? 'blocked' : ''}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Avatar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                    src: c.otherUser?.avatarPath,
                                                                    name: c.otherUser?.name || c.otherUser?.email,
                                                                    size: 42,
                                                                    className: "messages-avatar"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/messages/page.js",
                                                                    lineNumber: 808,
                                                                    columnNumber: 23
                                                                }, this),
                                                                (c.isBlockedByMe || c.isBlockingMe) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "blocked-overlay",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                        className: "bi bi-slash-circle"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/messages/page.js",
                                                                        lineNumber: 816,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/messages/page.js",
                                                                    lineNumber: 815,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/messages/page.js",
                                                            lineNumber: 807,
                                                            columnNumber: 21
                                                        }, this),
                                                        c.unreadCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "messages-new-badge",
                                                            children: c.unreadCount
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/messages/page.js",
                                                            lineNumber: 820,
                                                            columnNumber: 43
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/messages/page.js",
                                                    lineNumber: 806,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "messages-item-meta",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "messages-item-name",
                                                            children: c.otherUser?.name || c.otherUser?.email || '-'
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/messages/page.js",
                                                            lineNumber: 823,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "messages-item-status",
                                                            children: c.lastMessage?.body ? c.lastMessage.body : ' '
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/messages/page.js",
                                                            lineNumber: 824,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/messages/page.js",
                                                    lineNumber: 822,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, c.id, true, {
                                            fileName: "[project]/app/messages/page.js",
                                            lineNumber: 800,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/messages/page.js",
                                    lineNumber: 798,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/messages/page.js",
                            lineNumber: 784,
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
                                                    name: activeConversation?.otherUser?.name || activeConversation?.otherUser?.email,
                                                    size: 42,
                                                    className: `messages-avatar ${activeConversation?.isBlockedByMe || activeConversation?.isBlockingMe ? 'blocked' : ''}`
                                                }, void 0, false, {
                                                    fileName: "[project]/app/messages/page.js",
                                                    lineNumber: 834,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "messages-topbar-name",
                                                            children: activeConversation?.otherUser?.name || activeConversation?.otherUser?.email || '-'
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/messages/page.js",
                                                            lineNumber: 841,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "messages-topbar-sub",
                                                            children: " "
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/messages/page.js",
                                                            lineNumber: 842,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/messages/page.js",
                                                    lineNumber: 840,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/messages/page.js",
                                            lineNumber: 833,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "messages-topbar-right",
                                            children: activeConversation?.otherUser && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "messages-topbar-actions",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "topbar-icon-btn",
                                                        onClick: handleNickname,
                                                        title: "เปลี่ยนชื่อเล่น",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                            className: "bi bi-pencil-square"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/messages/page.js",
                                                            lineNumber: 850,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/messages/page.js",
                                                        lineNumber: 849,
                                                        columnNumber: 21
                                                    }, this),
                                                    !activeConversation.isBlockingMe && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: `topbar-icon-btn ${activeConversation.isBlockedByMe ? 'active-blocked' : ''}`,
                                                        onClick: handleBlock,
                                                        title: activeConversation.isBlockedByMe ? "เลิกบล็อก" : "บล็อก",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                            className: `bi ${activeConversation.isBlockedByMe ? 'bi-check-circle' : 'bi-slash-circle'}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/messages/page.js",
                                                            lineNumber: 858,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/messages/page.js",
                                                        lineNumber: 853,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "topbar-icon-btn",
                                                        onClick: handleReport,
                                                        title: "รายงาน",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                            className: "bi bi-flag"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/messages/page.js",
                                                            lineNumber: 862,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/messages/page.js",
                                                        lineNumber: 861,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "topbar-icon-btn btn-danger",
                                                        onClick: handleDeleteChat,
                                                        title: "ลบแชท",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                            className: "bi bi-trash"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/messages/page.js",
                                                            lineNumber: 865,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/messages/page.js",
                                                        lineNumber: 864,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: `/profile/${activeConversation.otherUser.id}`,
                                                        className: "topbar-icon-btn",
                                                        title: "View Profile",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                            className: "bi bi-person-circle"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/messages/page.js",
                                                            lineNumber: 872,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/messages/page.js",
                                                        lineNumber: 867,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/messages/page.js",
                                                lineNumber: 848,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/messages/page.js",
                                            lineNumber: 846,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/messages/page.js",
                                    lineNumber: 832,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "messages-thread",
                                    ref: threadRef,
                                    children: [
                                        loadingMessages ? null : messages.map((m)=>{
                                            const fromMe = !!meId && m.senderId === meId;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `messages-bubble-row ${m.senderId === 'system' ? 'system' : fromMe ? 'me' : 'them'}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `messages-bubble ${m.senderId === 'system' ? 'system' : fromMe ? 'me' : 'them'} ${m.attachments && m.attachments.length > 0 && !m.body ? 'attachment-only' : ''} ${m.isError ? 'error' : ''}`,
                                                    children: [
                                                        m.attachments && m.attachments.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "messages-bubble-attachments",
                                                            children: m.attachments.map((att)=>{
                                                                const isImage = att.mimeType && att.mimeType.startsWith('image/') || att.filename && (att.filename.toLowerCase().endsWith('.jpg') || att.filename.toLowerCase().endsWith('.jpeg') || att.filename.toLowerCase().endsWith('.png') || att.filename.toLowerCase().endsWith('.gif') || att.filename.toLowerCase().endsWith('.webp'));
                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "messages-attachment-item",
                                                                    children: isImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "messages-attachment-container discord-style image-type",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "messages-attachment-img-wrapper",
                                                                                onClick: ()=>openImageModal(resolvePath(att.path)),
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                    src: resolvePath(att.path),
                                                                                    alt: att.filename || 'image',
                                                                                    className: "messages-attachment-img"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/messages/page.js",
                                                                                    lineNumber: 912,
                                                                                    columnNumber: 43
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/messages/page.js",
                                                                                lineNumber: 908,
                                                                                columnNumber: 41
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                className: "attachment-download-btn visible",
                                                                                onClick: (e)=>{
                                                                                    e.stopPropagation();
                                                                                    downloadFile(att.path, att.filename || 'image.jpg');
                                                                                },
                                                                                title: "Download",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                    className: "bi bi-download"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/messages/page.js",
                                                                                    lineNumber: 922,
                                                                                    columnNumber: 43
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/messages/page.js",
                                                                                lineNumber: 914,
                                                                                columnNumber: 41
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/messages/page.js",
                                                                        lineNumber: 907,
                                                                        columnNumber: 39
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "messages-attachment-container discord-style",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "messages-attachment-discord",
                                                                                onClick: ()=>downloadFile(att.path, att.filename || 'file'),
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "discord-file-icon",
                                                                                        children: att.filename && (att.filename.toLowerCase().endsWith('.zip') || att.filename.toLowerCase().endsWith('.rar') || att.filename.toLowerCase().endsWith('.7z')) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                            className: "bi bi-file-earmark-zip-fill"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/messages/page.js",
                                                                                            lineNumber: 933,
                                                                                            columnNumber: 47
                                                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                            className: "bi bi-file-earmark-text-fill"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/messages/page.js",
                                                                                            lineNumber: 935,
                                                                                            columnNumber: 47
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/messages/page.js",
                                                                                        lineNumber: 931,
                                                                                        columnNumber: 43
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "discord-file-info",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "discord-file-name",
                                                                                                children: att.filename || 'ไฟล์แนบ'
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/messages/page.js",
                                                                                                lineNumber: 939,
                                                                                                columnNumber: 45
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "discord-file-size",
                                                                                                children: formatFileSize(att.size || 0)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/messages/page.js",
                                                                                                lineNumber: 940,
                                                                                                columnNumber: 45
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/app/messages/page.js",
                                                                                        lineNumber: 938,
                                                                                        columnNumber: 43
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/messages/page.js",
                                                                                lineNumber: 927,
                                                                                columnNumber: 41
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                className: "attachment-download-btn visible",
                                                                                onClick: (e)=>{
                                                                                    e.stopPropagation();
                                                                                    downloadFile(att.path, att.filename || 'file');
                                                                                },
                                                                                title: "Download",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                    className: "bi bi-download"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/messages/page.js",
                                                                                    lineNumber: 951,
                                                                                    columnNumber: 43
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/messages/page.js",
                                                                                lineNumber: 943,
                                                                                columnNumber: 41
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/messages/page.js",
                                                                        lineNumber: 926,
                                                                        columnNumber: 39
                                                                    }, this)
                                                                }, att.id, false, {
                                                                    fileName: "[project]/app/messages/page.js",
                                                                    lineNumber: 905,
                                                                    columnNumber: 35
                                                                }, this);
                                                            })
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/messages/page.js",
                                                            lineNumber: 893,
                                                            columnNumber: 29
                                                        }, this),
                                                        m.body && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "messages-bubble-text",
                                                            children: m.body
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/messages/page.js",
                                                            lineNumber: 960,
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
                                                                    lineNumber: 964,
                                                                    columnNumber: 29
                                                                }, this),
                                                                fromMe && m.readAt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "messages-seen-status",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                            className: "bi bi-check2-all"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/messages/page.js",
                                                                            lineNumber: 970,
                                                                            columnNumber: 33
                                                                        }, this),
                                                                        " อ่านแล้ว"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/messages/page.js",
                                                                    lineNumber: 968,
                                                                    columnNumber: 31
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/messages/page.js",
                                                            lineNumber: 962,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/messages/page.js",
                                                    lineNumber: 891,
                                                    columnNumber: 25
                                                }, this)
                                            }, m.id, false, {
                                                fileName: "[project]/app/messages/page.js",
                                                lineNumber: 890,
                                                columnNumber: 23
                                            }, this);
                                        }),
                                        loadingMessages ? null : !messages.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "messages-empty",
                                            children: "ยังไม่มีข้อความ"
                                        }, void 0, false, {
                                            fileName: "[project]/app/messages/page.js",
                                            lineNumber: 988,
                                            columnNumber: 60
                                        }, this) : null
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/messages/page.js",
                                    lineNumber: 879,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "messages-composer",
                                    children: activeConversation?.isBlockedByMe || activeConversation?.isBlockingMe ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "blocked-composer-notice liquid-glass",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: "bi bi-exclamation-circle"
                                            }, void 0, false, {
                                                fileName: "[project]/app/messages/page.js",
                                                lineNumber: 997,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: activeConversation.isBlockedByMe ? 'คุณได้บล็อกผู้ใช้นี้ไว้ ไม่สามารถส่งข้อความได้' : 'คุณไม่สามารถส่งข้อความถึงผู้ใช้นี้ได้'
                                            }, void 0, false, {
                                                fileName: "[project]/app/messages/page.js",
                                                lineNumber: 998,
                                                columnNumber: 19
                                            }, this),
                                            activeConversation.isBlockedByMe && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "unblock-link-btn",
                                                onClick: handleBlock,
                                                children: "เลิกบล็อก"
                                            }, void 0, false, {
                                                fileName: "[project]/app/messages/page.js",
                                                lineNumber: 1004,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/messages/page.js",
                                        lineNumber: 996,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
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
                                                                lineNumber: 1014,
                                                                columnNumber: 29
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "file-preview-icon",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                        className: "bi bi-file-earmark-text"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/messages/page.js",
                                                                        lineNumber: 1017,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "file-preview-name",
                                                                        children: selectedFiles[idx]?.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/messages/page.js",
                                                                        lineNumber: 1018,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/messages/page.js",
                                                                lineNumber: 1016,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>removeFile(idx),
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                    className: "bi bi-x"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/messages/page.js",
                                                                    lineNumber: 1022,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/messages/page.js",
                                                                lineNumber: 1021,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, url, true, {
                                                        fileName: "[project]/app/messages/page.js",
                                                        lineNumber: 1012,
                                                        columnNumber: 25
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/messages/page.js",
                                                lineNumber: 1010,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "messages-composer-inner",
                                                children: [
                                                    uploading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "upload-progress-bar",
                                                        style: {
                                                            width: `${uploadProgress}%`
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/messages/page.js",
                                                        lineNumber: 1030,
                                                        columnNumber: 23
                                                    }, this),
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
                                                            lineNumber: 1039,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/messages/page.js",
                                                        lineNumber: 1032,
                                                        columnNumber: 21
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
                                                        lineNumber: 1041,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        className: "messages-input",
                                                        placeholder: uploading ? `กำลังอัปโหลด... ${uploadProgress}%` : "พิมพ์ข้อความ...",
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
                                                        lineNumber: 1049,
                                                        columnNumber: 21
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
                                                            lineNumber: 1070,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/messages/page.js",
                                                        lineNumber: 1069,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/messages/page.js",
                                                lineNumber: 1028,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true)
                                }, void 0, false, {
                                    fileName: "[project]/app/messages/page.js",
                                    lineNumber: 994,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/messages/page.js",
                            lineNumber: 831,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                            className: "messages-right",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "messages-profile",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Avatar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: activeConversation?.otherUser?.avatarPath,
                                        name: activeConversation?.otherUser?.name || activeConversation?.otherUser?.email,
                                        size: 92,
                                        className: "messages-profile-avatar"
                                    }, void 0, false, {
                                        fileName: "[project]/app/messages/page.js",
                                        lineNumber: 1083,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "messages-profile-name",
                                        children: activeConversation?.otherUser?.name || activeConversation?.otherUser?.email || '-'
                                    }, void 0, false, {
                                        fileName: "[project]/app/messages/page.js",
                                        lineNumber: 1089,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "messages-profile-sub",
                                        children: "Hi there, I am using chat app"
                                    }, void 0, false, {
                                        fileName: "[project]/app/messages/page.js",
                                        lineNumber: 1090,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/messages/page.js",
                                lineNumber: 1082,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/messages/page.js",
                            lineNumber: 1081,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/messages/page.js",
                    lineNumber: 783,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/messages/page.js",
                lineNumber: 782,
                columnNumber: 7
            }, this),
            showNicknameModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "modal-overlay",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "modal-content liquid-glass",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "modal-title",
                            children: "เปลี่ยนชื่อเล่น"
                        }, void 0, false, {
                            fileName: "[project]/app/messages/page.js",
                            lineNumber: 1099,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "modal-subtitle",
                            children: [
                                "ป้อนชื่อเล่นสำหรับ ",
                                activeConversation?.otherUser?.name || activeConversation?.otherUser?.email
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/messages/page.js",
                            lineNumber: 1100,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            className: "modal-input",
                            value: nicknameDraft,
                            onChange: (e)=>setNicknameDraft(e.target.value),
                            placeholder: "ชื่อเล่น...",
                            autoFocus: true
                        }, void 0, false, {
                            fileName: "[project]/app/messages/page.js",
                            lineNumber: 1101,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "modal-actions",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "modal-btn modal-btn-secondary",
                                    onClick: ()=>setShowNicknameModal(false),
                                    children: "ยกเลิก"
                                }, void 0, false, {
                                    fileName: "[project]/app/messages/page.js",
                                    lineNumber: 1110,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "modal-btn modal-btn-outline",
                                    onClick: ()=>submitNickname(''),
                                    children: "คืนค่าชื่อเดิม"
                                }, void 0, false, {
                                    fileName: "[project]/app/messages/page.js",
                                    lineNumber: 1111,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "modal-btn modal-btn-primary",
                                    onClick: ()=>submitNickname(nicknameDraft),
                                    children: "ตกลง"
                                }, void 0, false, {
                                    fileName: "[project]/app/messages/page.js",
                                    lineNumber: 1112,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/messages/page.js",
                            lineNumber: 1109,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/messages/page.js",
                    lineNumber: 1098,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/messages/page.js",
                lineNumber: 1097,
                columnNumber: 9
            }, this),
            showConfirmModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "modal-overlay",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "modal-content liquid-glass",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "modal-title",
                            children: confirmConfig.title
                        }, void 0, false, {
                            fileName: "[project]/app/messages/page.js",
                            lineNumber: 1120,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "modal-subtitle",
                            children: confirmConfig.message
                        }, void 0, false, {
                            fileName: "[project]/app/messages/page.js",
                            lineNumber: 1121,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "modal-actions",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "modal-btn modal-btn-secondary",
                                    onClick: ()=>setShowConfirmModal(false),
                                    children: "ยกเลิก"
                                }, void 0, false, {
                                    fileName: "[project]/app/messages/page.js",
                                    lineNumber: 1123,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "modal-btn modal-btn-primary",
                                    onClick: confirmConfig.onConfirm,
                                    children: "ยืนยัน"
                                }, void 0, false, {
                                    fileName: "[project]/app/messages/page.js",
                                    lineNumber: 1124,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/messages/page.js",
                            lineNumber: 1122,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/messages/page.js",
                    lineNumber: 1119,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/messages/page.js",
                lineNumber: 1118,
                columnNumber: 9
            }, this),
            showImageModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "modal-overlay image-modal-overlay",
                onClick: ()=>setShowImageModal(false),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "modal-close-btn",
                        onClick: ()=>setShowImageModal(false),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                            className: "bi bi-x-lg"
                        }, void 0, false, {
                            fileName: "[project]/app/messages/page.js",
                            lineNumber: 1132,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/messages/page.js",
                        lineNumber: 1131,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "image-modal-content",
                        onClick: (e)=>e.stopPropagation(),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: selectedImageUrl,
                                alt: "Preview",
                                className: "image-modal-img"
                            }, void 0, false, {
                                fileName: "[project]/app/messages/page.js",
                                lineNumber: 1135,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "image-modal-download-btn",
                                onClick: ()=>{
                                    const filename = selectedImageUrl.split('/').pop() || 'download.jpg';
                                    downloadFile(selectedImageUrl, filename);
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: "bi bi-download"
                                    }, void 0, false, {
                                        fileName: "[project]/app/messages/page.js",
                                        lineNumber: 1143,
                                        columnNumber: 15
                                    }, this),
                                    " ดาวน์โหลดรูปภาพ"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/messages/page.js",
                                lineNumber: 1136,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/messages/page.js",
                        lineNumber: 1134,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/messages/page.js",
                lineNumber: 1130,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/messages/page.js",
        lineNumber: 781,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=app_messages_page_e1989693.js.map