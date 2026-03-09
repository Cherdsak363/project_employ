module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/querystring [external] (querystring, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("querystring", () => require("querystring"));

module.exports = mod;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/lib/db.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs, [project]/node_modules/@prisma/client)");
;
const globalForPrisma = /*TURBOPACK member replacement*/ __turbopack_context__.g;
const prisma = globalForPrisma.prisma || new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__["PrismaClient"]();
if ("TURBOPACK compile-time truthy", 1) globalForPrisma.prisma = prisma;
const __TURBOPACK__default__export__ = prisma;
}),
"[project]/app/api/auth/[...nextauth]/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>handler,
    "POST",
    ()=>handler,
    "authOptions",
    ()=>authOptions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$providers$2f$credentials$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/providers/credentials.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/bcryptjs/index.js [app-route] (ecmascript)");
;
;
;
;
const authOptions = {
    providers: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$providers$2f$credentials$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])({
            name: 'credentials',
            credentials: {
                email: {
                    label: 'Email',
                    type: 'email'
                },
                password: {
                    label: 'Password',
                    type: 'password'
                }
            },
            async authorize (credentials) {
                const user = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].user.findUnique({
                    where: {
                        email: credentials.email
                    }
                });
                if (user && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].compareSync(credentials.password, user.password)) {
                    return {
                        id: user.id,
                        email: user.email,
                        name: user.name,
                        avatarPath: user.avatarPath,
                        image: user.avatarPath
                    };
                }
                return null;
            }
        })
    ],
    session: {
        strategy: 'jwt'
    },
    callbacks: {
        async jwt ({ token, user, trigger, session }) {
            if (user) {
                token.id = user.id;
                token.name = user.name;
                token.email = user.email;
                token.avatarPath = user.avatarPath;
                token.picture = user.avatarPath;
            }
            if (trigger === 'update' && session?.user) {
                if (session.user.name !== undefined) token.name = session.user.name;
                if (session.user.avatarPath !== undefined) token.avatarPath = session.user.avatarPath;
                if (session.user.avatarPath !== undefined) token.picture = session.user.avatarPath;
            }
            return token;
        },
        async session ({ session, token }) {
            if (session?.user) {
                const resolvedId = token?.id || token?.sub;
                if (resolvedId) session.user.id = resolvedId;
            }
            if (session?.user && token?.name !== undefined) {
                session.user.name = token.name;
            }
            if (session?.user && token?.email) {
                session.user.email = token.email;
            }
            if (session?.user && token?.avatarPath !== undefined) {
                session.user.avatarPath = token.avatarPath;
            }
            if (session?.user && token?.picture !== undefined) {
                session.user.image = token.picture;
            }
            return session;
        }
    },
    pages: {
        signIn: '/signin'
    }
};
const handler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(authOptions);
;
}),
"[project]/app/api/profile/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "PUT",
    ()=>PUT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$auth$2f5b2e2e2e$nextauth$5d2f$route$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/api/auth/[...nextauth]/route.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db.js [app-route] (ecmascript)");
;
;
;
async function GET() {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getServerSession"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$auth$2f5b2e2e2e$nextauth$5d2f$route$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["authOptions"]);
    if (!session?.user?.id) {
        return new Response(JSON.stringify({
            error: 'Unauthorized'
        }), {
            status: 401
        });
    }
    const user = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].user.findUnique({
        where: {
            id: session.user.id
        },
        select: {
            id: true,
            uid: true,
            email: true,
            name: true,
            firstName: true,
            lastName: true,
            phone: true,
            address: true,
            avatarPath: true,
            bannerPath: true,
            socialLinks: true,
            createdAt: true
        }
    });
    if (!user) {
        return new Response(JSON.stringify({
            error: 'User not found'
        }), {
            status: 404
        });
    }
    return new Response(JSON.stringify({
        user
    }), {
        status: 200
    });
}
async function PUT(request) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getServerSession"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$auth$2f5b2e2e2e$nextauth$5d2f$route$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["authOptions"]);
    if (!session?.user?.id) {
        return new Response(JSON.stringify({
            error: 'Unauthorized'
        }), {
            status: 401
        });
    }
    const { name, firstName, lastName, password, phone, address, avatarPath, bannerPath, socialLinks } = await request.json();
    if (name !== undefined && typeof name !== 'string') {
        return new Response(JSON.stringify({
            error: 'Invalid name'
        }), {
            status: 400
        });
    }
    if (firstName !== undefined && typeof firstName !== 'string') {
        return new Response(JSON.stringify({
            error: 'Invalid firstName'
        }), {
            status: 400
        });
    }
    if (lastName !== undefined && typeof lastName !== 'string') {
        return new Response(JSON.stringify({
            error: 'Invalid lastName'
        }), {
            status: 400
        });
    }
    if (phone !== undefined && typeof phone !== 'string') {
        return new Response(JSON.stringify({
            error: 'Invalid phone'
        }), {
            status: 400
        });
    }
    if (address !== undefined && typeof address !== 'string') {
        return new Response(JSON.stringify({
            error: 'Invalid address'
        }), {
            status: 400
        });
    }
    if (avatarPath !== undefined && typeof avatarPath !== 'string') {
        return new Response(JSON.stringify({
            error: 'Invalid avatarPath'
        }), {
            status: 400
        });
    }
    if (bannerPath !== undefined && typeof bannerPath !== 'string') {
        return new Response(JSON.stringify({
            error: 'Invalid bannerPath'
        }), {
            status: 400
        });
    }
    if (password !== undefined && typeof password !== 'string') {
        return new Response(JSON.stringify({
            error: 'Invalid password'
        }), {
            status: 400
        });
    }
    let sanitizedSocialLinks;
    if (socialLinks === null || socialLinks === undefined) {
        sanitizedSocialLinks = undefined;
    } else if (!Array.isArray(socialLinks)) {
        return new Response(JSON.stringify({
            error: 'Invalid socialLinks'
        }), {
            status: 400
        });
    } else {
        sanitizedSocialLinks = socialLinks.map((item)=>{
            const type = typeof item?.type === 'string' ? item.type.trim() : '';
            const url = typeof item?.url === 'string' ? item.url.trim() : '';
            return {
                type,
                url
            };
        }).filter((item)=>item.type || item.url);
    }
    if (password && password.length < 6) {
        return new Response(JSON.stringify({
            error: 'Password too short'
        }), {
            status: 400
        });
    }
    const data = {};
    if (name !== undefined) data.name = name;
    if (firstName !== undefined) data.firstName = firstName;
    if (lastName !== undefined) data.lastName = lastName;
    if (phone !== undefined) data.phone = phone;
    if (address !== undefined) data.address = address;
    if (avatarPath !== undefined) data.avatarPath = avatarPath;
    if (bannerPath !== undefined) data.bannerPath = bannerPath;
    if (sanitizedSocialLinks !== undefined) data.socialLinks = sanitizedSocialLinks;
    if (password) {
        const bcrypt = (await __turbopack_context__.A("[project]/node_modules/bcryptjs/index.js [app-route] (ecmascript, async loader)")).default;
        data.password = bcrypt.hashSync(password, 10);
    }
    let updatedUser;
    try {
        updatedUser = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].user.update({
            where: {
                id: session.user.id
            },
            data,
            select: {
                id: true,
                uid: true,
                email: true,
                name: true,
                firstName: true,
                lastName: true,
                phone: true,
                address: true,
                avatarPath: true,
                bannerPath: true,
                socialLinks: true,
                createdAt: true
            }
        });
    } catch (e) {
        if (data.socialLinks !== undefined) {
            const fallbackData = {
                ...data
            };
            delete fallbackData.socialLinks;
            updatedUser = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].user.update({
                where: {
                    id: session.user.id
                },
                data: fallbackData,
                select: {
                    id: true,
                    uid: true,
                    email: true,
                    name: true,
                    firstName: true,
                    lastName: true,
                    phone: true,
                    address: true,
                    avatarPath: true,
                    bannerPath: true,
                    socialLinks: true,
                    createdAt: true
                }
            });
        } else {
            throw e;
        }
    }
    return new Response(JSON.stringify({
        user: updatedUser
    }), {
        status: 200
    });
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__c6ebf31a._.js.map