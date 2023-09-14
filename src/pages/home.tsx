
import test_20 from '/test_20.csv';

function HomePage() {
    const reader = new FileReader();
    reader.onload = () => {
        const text = reader.result;
        if(text) {
            console.log("Found text");
        }
    }

    reader.readAsText(test_20);
    return (
        <>
        <h1>test</h1>
        </>
    )
}

export default HomePage;