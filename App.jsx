import Header from "./components/Header"
import Entry from "./components/Entry"
import data from "./data"

export default function App() {
    
    const entryElements = data.map((props) => {
        return (
            <Entry
                key={props.id}
                {...props}
                // img={props.img}
                // title={props.title}
                // country={props.country}
                // googleMapsLink={props.googleMapsLink}
                // dates={props.dates}
                // text={props.text}
            />
        )
    })
    
    return (
        <>
            <Header />
            <main className="container">
                {entryElements}
            </main>
        </>
    )
}