import LoginButton from "@/components/auth/LoginButton";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils"
import {Poppins} from "next/font/google"


const font = Poppins({
  subsets: ["latin"],
  weight : ["600"]
})

export default function Home() {
  return (
      <main className="flex flex-col justify-center items-center h-screen bg-sky-900">
        <div className="flex flex-col text-center space-y-6 ">
          <h1 className={cn("font-bold text-6xl text-white", font.className)}>🔒Auth</h1>
          <p className="text-lg text-white"> full next js authentifiction tutorial</p>
          <div>
            <LoginButton>
            <Button variant={"secondary"} size={"lg"}>Sign In</Button>
            </LoginButton>
          </div>
        </div>

      </main>
  );
}
