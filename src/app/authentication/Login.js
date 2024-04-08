"use client"
import { getLocalStorage } from "@/utils/LocalStorageUtills"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export const LoginAtuh = () => {
    const router = useRouter();
    const isAuthenticated = getLocalStorage("token")
    useEffect(() => {
        if (!isAuthenticated) {
            router.push("/auth/login")
        } else {
            router.push("/admin/dashboard")
        }
    }, [router])

    return null;
}

export const AdminAuth = (slug) => {
    const router = useRouter();
    const isAuthenticated = getLocalStorage("token")
    useEffect(() => {
        if (isAuthenticated) {
            router.push("/admin/" + slug)
        }
    }, [router])

    return null;
}