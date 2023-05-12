import Color from "@/components/color"

export default function Home() {
  const color = "blue"
  return (
   <main className="text-green-600 grid h-screen place-items-center">
   <p>green Page</p>
   <Color color={color} /></main>
  )
}
