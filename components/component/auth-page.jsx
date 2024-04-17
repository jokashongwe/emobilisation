"use client"
import { TabsList, Tabs } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function AuthPage({ loginAction, signupAction }) {
  const [isLogin, setIsLogin] = useState(true);

    return (
    <div className="mx-auto max-w-md space-y-6">
      <div className="space-y-2">
        <Tabs>
          <TabsList className="flex border-b-0">
            <div onClick={() => setIsLogin(true)} className={"mx-3 cursor-pointer hover:bg-gray-600"} >Se connecter</div>
            <div onClick={() => setIsLogin(false)} className={"mx-3 cursor-pointer hover:bg-gray-600"} >Créer un compte</div>
          </TabsList>
          <div className="space-y-4">
            <form className={ !isLogin ? "hidden": "mx-3"} >
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" placeholder="m@example.com" type="email" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Mot de passe</Label>
                  <Link className="ml-auto inline-block text-sm underline" href="#">
                    Mot de passe oublié?
                  </Link>
                </div>
                <Input id="password" name="password" type="password" />
              </div>
              <Button formAction={loginAction} className="w-full my-3" type="submit">
                Connexion
              </Button>
            </form>
            <form className={ isLogin ? "hidden": "mx-3"} >
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">Prénom</Label>
                    <Input id="first-name" name="firstName" placeholder="Lee" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Nom</Label>
                    <Input id="last-name" name="lastName" placeholder="Robinson" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" placeholder="m@example.com" required type="email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Mot de passe</Label>
                  <Input id="password" name="password" required type="password" />
                </div>
                <Button formAction={signupAction} className="w-full" type="submit">
                  Inscription
                </Button>
              </div>
            </form>
          </div>
        </Tabs>
      </div>
    </div>
  );
}
