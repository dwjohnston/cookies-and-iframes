import { MyClientComponent } from "@/component/MyClientComponent";

export default function RootPage() {

    return <div>
        <h1>
        I am the root page
        </h1>


        <MyClientComponent path ="/req1"/>
        <MyClientComponent path ="/req2"/>
        <MyClientComponent path ="/req3"/>
    </div>
}