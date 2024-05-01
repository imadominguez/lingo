import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col mx-auto max-w-48 gap-y-2 py-4">

      <Button>Default</Button>
      <Button variant={"primary"}>Primary</Button>
      <Button variant={"primaryOutline"}>Primary Outline</Button>
    

      <Button variant={"secondary"}>Secondary</Button>
      <Button variant={"secondaryOutline"}>Secondary Outline</Button>

      <Button variant={"danger"}>danger</Button>
      <Button variant={"dangerOutline"}>danger Outline</Button>

      <Button variant={"super"}>super</Button>
      <Button variant={"superOutline"}>super Outline</Button>

      <Button variant={"ghost"}>ghost Outline</Button>

      <Button variant={"sidebar"}>sidebar</Button>
      <Button variant={"sidebarOutline"}>sidebar Outline</Button>

    </div>    
  );
}
