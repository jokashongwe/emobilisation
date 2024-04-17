'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

export async function login(formData) {
    const supabase = createClient()

    console.log("LoginAction!!!");

    // type-casting here for convenience
    // in practice, you should validate your inputs
    const data = {
        email: formData.get('email'),
        password: formData.get('password'),
    }

    const { error } = await supabase.auth.signInWithPassword(data)

    if (error) {
        console.log("error:  ", error)
        redirect('/error')
    }

    revalidatePath('/', 'layout')
    redirect('/admin')
}

export async function signup(formData) {
    const supabase = createClient()


    //console.log("FormData: ", formData);

    const data = {
        email: formData.get('email'),
        password: formData.get('password'),
        firstName: formData.get("firstName"),
        lastName: formData.get("lastName"),
        displayName: formData.get("firstName") + " " + formData.get("lastName")
    }

    console.log("FormData: ", data);

    const { error } = await supabase.auth.signUp(data)

    if (error) {
        console.log("error:  ", error)
        redirect('/error')
    }

    revalidatePath('/', 'layout')
    redirect('/admin')
}