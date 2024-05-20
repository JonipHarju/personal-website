import Hero from "@/components/Hero";
import { BoxesCore } from "@/components/ui/background-boxes";

export default function Home() {
  return (  <>
<div className="h-screen w-screen relative overflow-hidden bg-black flex flex-col items-center justify-center rounded-lg">
  <div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

  <BoxesCore className="w-full h-full" />
  <div className="text-center z-20">
  <h1 className="text-white text-7xl">
    Joni Harju
  </h1>
  <h2 className="mt-2 text-white text-6xl">
    A god developer 
  </h2>
  </div>
</div>
</>

  );
}
