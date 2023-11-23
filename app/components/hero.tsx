import { Github, Mail, Twitter } from "lucide-react"

export const Hero = () => {
    return(
        <div className="py-8 space-y-6 mb-6">
        <h1 className="text-5xl font-bold tracking-tight">
          Yu - your own blog
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Aspernatur dolore quis doloribus dolorum nam rem ipsam repellat
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, eos
          dignissimos cumque autem.
        </p>
        <div className="flex gap-3">
          <button className="btn btn-ghost btn-square hover:text-primary">
            <Github />
          </button>
          <button className="btn btn-ghost btn-square hover:text-primary">
            <Twitter />
          </button>
          <button className="btn btn-ghost btn-square hover:text-primary">
            <Mail />
          </button>
        </div>
      </div>
    );
}