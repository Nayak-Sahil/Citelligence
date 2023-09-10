
const HeroServices = () => {
    const cards = [
        {
            id: 1,
            title: "Card 1",
            description: "This is the first card.",
            imageUrl: "https://example.com/card-1.jpg",
        },
        {
            id: 2,
            title: "Card 2",
            description: "This is the second card.",
            imageUrl: "https://example.com/card-2.jpg",
        },
        {
            id: 3,
            title: "Card 3",
            description: "This is the third card.",
            imageUrl: "https://example.com/card-3.jpg",
        },
    ];
    return (
        <div className="w-full my-16 text-white  bg-gradient-to-r from-sky-500 to-indigo-500 px-36">
            <div className="w-1/2 flex flex-col justify-center items-center gap-10 py-10">
                {/* <CardSection cards={cards} /> */}
                {
                    cards.map(card => (
                        <a key={card.id} href="#" class="block max-w-sm p-6 backdrop-blur-sm  rounded-lg shadow hover:bg-white/40 bg-gradient-to-b from-white/5 to-white/30 no-underline">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{card.title}</h5>
                            <p class="font-normal text-white">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        </a>
                    ))
                }
            </div>
        </div>
    )
}

export default HeroServices
