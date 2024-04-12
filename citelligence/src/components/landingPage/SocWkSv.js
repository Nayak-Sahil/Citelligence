import scsrv1 from "../../../public/services_img/scsrv 1.svg"
import scsrv2 from "../../../public/services_img/scsrv 2.svg"
import scsrv3 from "../../../public/services_img/scsrv 3.png"
import Image from 'next/image'

const SocWkSv = () => {
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
        // <div className="w-full h-screen my-16 text-white bg-gradient-to-b from-sky-400 to-sky-200 px-36">
        //     <div className="w-1/2 flex flex-col justify-center items-center gap-10 py-10">
        //         {
        //             cards.map(card => (
        //                 <a key={card.id} href="#" className="block max-w-sm p-6 backdrop-blur-sm  rounded-lg shadow hover:bg-white/40 bg-gradient-to-b from-white/5 to-white/30 no-underline">
        //                     <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{card.title}</h5>
        //                     <p className="font-normal text-white">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        //                 </a>
        //             ))
        //         }
        //     </div>
        // </div>
        <>
            {/* <article
                className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
            >
                <div className="rounded-[10px] bg-white p-4 !pt-20 sm:p-6">
                    <time datetime="2022-10-10" className="block text-xs text-gray-500">
                        10th Oct 2022
                    </time>

                    <a href="#">
                        <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                            How to center an element using JavaScript and jQuery
                        </h3>
                    </a>

                    <div className="mt-4 flex flex-wrap gap-1">
                        <span
                            className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600"
                        >
                            Snippet
                        </span>

                        <span
                            className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600"
                        >
                            JavaScript
                        </span>
                    </div>
                </div>
            </article> */}
            <section className="p-20 pt-20 lg:pt-[120px] pb-12 lg:pb-[90px] overflow-hidden w-full ">
                {/* <div className="container w-full"> */}
                    <div className="flex flex-wrap items-center justify-between -mx-4">
                        <div className="w-full px-4 lg:w-6/12">
                            <div className="flex items-center -mx-3 sm:-mx-4">
                                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                                    <div className="py-3 sm:py-4">
                                        <Image
                                            src={scsrv1}
                                            alt="Social worker"
                                            className="w-50 border border-slate-800 rounded-2xl"
                                        />
                                    </div>
                                    <div className="py-3 sm:py-4">
                                        <Image
                                            src={scsrv3}
                                            alt="Social Service"
                                            className="w-50 rounded-2xl border border-slate-800"
                                        />
                                    </div>
                                </div>
                                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                                    <div className="relative z-10 my-4">
                                        <Image
                                            src={scsrv3}
                                            alt="Connect"
                                            className="w-50 rounded-2xl border border-slate-800"
                                        />
                                        <span className="absolute -right-7 -bottom-7 z-[-1]">
                                            <svg
                                                width={134}
                                                height={106}
                                                viewBox="0 0 134 106"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <circle
                                                    cx="1.66667"
                                                    cy={104}
                                                    r="1.66667"
                                                    transform="rotate(-90 1.66667 104)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="16.3333"
                                                    cy={104}
                                                    r="1.66667"
                                                    transform="rotate(-90 16.3333 104)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={31}
                                                    cy={104}
                                                    r="1.66667"
                                                    transform="rotate(-90 31 104)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="45.6667"
                                                    cy={104}
                                                    r="1.66667"
                                                    transform="rotate(-90 45.6667 104)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="60.3334"
                                                    cy={104}
                                                    r="1.66667"
                                                    transform="rotate(-90 60.3334 104)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="88.6667"
                                                    cy={104}
                                                    r="1.66667"
                                                    transform="rotate(-90 88.6667 104)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="117.667"
                                                    cy={104}
                                                    r="1.66667"
                                                    transform="rotate(-90 117.667 104)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="74.6667"
                                                    cy={104}
                                                    r="1.66667"
                                                    transform="rotate(-90 74.6667 104)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={103}
                                                    cy={104}
                                                    r="1.66667"
                                                    transform="rotate(-90 103 104)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={132}
                                                    cy={104}
                                                    r="1.66667"
                                                    transform="rotate(-90 132 104)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="1.66667"
                                                    cy="89.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 1.66667 89.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="16.3333"
                                                    cy="89.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 16.3333 89.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={31}
                                                    cy="89.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 31 89.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="45.6667"
                                                    cy="89.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 45.6667 89.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="60.3333"
                                                    cy="89.3338"
                                                    r="1.66667"
                                                    transform="rotate(-90 60.3333 89.3338)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="88.6667"
                                                    cy="89.3338"
                                                    r="1.66667"
                                                    transform="rotate(-90 88.6667 89.3338)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="117.667"
                                                    cy="89.3338"
                                                    r="1.66667"
                                                    transform="rotate(-90 117.667 89.3338)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="74.6667"
                                                    cy="89.3338"
                                                    r="1.66667"
                                                    transform="rotate(-90 74.6667 89.3338)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={103}
                                                    cy="89.3338"
                                                    r="1.66667"
                                                    transform="rotate(-90 103 89.3338)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={132}
                                                    cy="89.3338"
                                                    r="1.66667"
                                                    transform="rotate(-90 132 89.3338)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="1.66667"
                                                    cy="74.6673"
                                                    r="1.66667"
                                                    transform="rotate(-90 1.66667 74.6673)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="1.66667"
                                                    cy="31.0003"
                                                    r="1.66667"
                                                    transform="rotate(-90 1.66667 31.0003)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="16.3333"
                                                    cy="74.6668"
                                                    r="1.66667"
                                                    transform="rotate(-90 16.3333 74.6668)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="16.3333"
                                                    cy="31.0003"
                                                    r="1.66667"
                                                    transform="rotate(-90 16.3333 31.0003)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={31}
                                                    cy="74.6668"
                                                    r="1.66667"
                                                    transform="rotate(-90 31 74.6668)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={31}
                                                    cy="31.0003"
                                                    r="1.66667"
                                                    transform="rotate(-90 31 31.0003)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="45.6667"
                                                    cy="74.6668"
                                                    r="1.66667"
                                                    transform="rotate(-90 45.6667 74.6668)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="45.6667"
                                                    cy="31.0003"
                                                    r="1.66667"
                                                    transform="rotate(-90 45.6667 31.0003)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="60.3333"
                                                    cy="74.6668"
                                                    r="1.66667"
                                                    transform="rotate(-90 60.3333 74.6668)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="60.3333"
                                                    cy="30.9998"
                                                    r="1.66667"
                                                    transform="rotate(-90 60.3333 30.9998)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="88.6667"
                                                    cy="74.6668"
                                                    r="1.66667"
                                                    transform="rotate(-90 88.6667 74.6668)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="88.6667"
                                                    cy="30.9998"
                                                    r="1.66667"
                                                    transform="rotate(-90 88.6667 30.9998)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="117.667"
                                                    cy="74.6668"
                                                    r="1.66667"
                                                    transform="rotate(-90 117.667 74.6668)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="117.667"
                                                    cy="30.9998"
                                                    r="1.66667"
                                                    transform="rotate(-90 117.667 30.9998)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="74.6667"
                                                    cy="74.6668"
                                                    r="1.66667"
                                                    transform="rotate(-90 74.6667 74.6668)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="74.6667"
                                                    cy="30.9998"
                                                    r="1.66667"
                                                    transform="rotate(-90 74.6667 30.9998)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={103}
                                                    cy="74.6668"
                                                    r="1.66667"
                                                    transform="rotate(-90 103 74.6668)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={103}
                                                    cy="30.9998"
                                                    r="1.66667"
                                                    transform="rotate(-90 103 30.9998)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={132}
                                                    cy="74.6668"
                                                    r="1.66667"
                                                    transform="rotate(-90 132 74.6668)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={132}
                                                    cy="30.9998"
                                                    r="1.66667"
                                                    transform="rotate(-90 132 30.9998)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="1.66667"
                                                    cy="60.0003"
                                                    r="1.66667"
                                                    transform="rotate(-90 1.66667 60.0003)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="1.66667"
                                                    cy="16.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 1.66667 16.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="16.3333"
                                                    cy="60.0003"
                                                    r="1.66667"
                                                    transform="rotate(-90 16.3333 60.0003)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="16.3333"
                                                    cy="16.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 16.3333 16.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={31}
                                                    cy="60.0003"
                                                    r="1.66667"
                                                    transform="rotate(-90 31 60.0003)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={31}
                                                    cy="16.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 31 16.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="45.6667"
                                                    cy="60.0003"
                                                    r="1.66667"
                                                    transform="rotate(-90 45.6667 60.0003)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="45.6667"
                                                    cy="16.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 45.6667 16.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="60.3333"
                                                    cy="60.0003"
                                                    r="1.66667"
                                                    transform="rotate(-90 60.3333 60.0003)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="60.3333"
                                                    cy="16.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 60.3333 16.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="88.6667"
                                                    cy="60.0003"
                                                    r="1.66667"
                                                    transform="rotate(-90 88.6667 60.0003)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="88.6667"
                                                    cy="16.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 88.6667 16.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="117.667"
                                                    cy="60.0003"
                                                    r="1.66667"
                                                    transform="rotate(-90 117.667 60.0003)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="117.667"
                                                    cy="16.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 117.667 16.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="74.6667"
                                                    cy="60.0003"
                                                    r="1.66667"
                                                    transform="rotate(-90 74.6667 60.0003)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="74.6667"
                                                    cy="16.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 74.6667 16.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={103}
                                                    cy="60.0003"
                                                    r="1.66667"
                                                    transform="rotate(-90 103 60.0003)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={103}
                                                    cy="16.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 103 16.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={132}
                                                    cy="60.0003"
                                                    r="1.66667"
                                                    transform="rotate(-90 132 60.0003)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={132}
                                                    cy="16.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 132 16.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="1.66667"
                                                    cy="45.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 1.66667 45.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="1.66667"
                                                    cy="1.66683"
                                                    r="1.66667"
                                                    transform="rotate(-90 1.66667 1.66683)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="16.3333"
                                                    cy="45.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 16.3333 45.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="16.3333"
                                                    cy="1.66683"
                                                    r="1.66667"
                                                    transform="rotate(-90 16.3333 1.66683)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={31}
                                                    cy="45.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 31 45.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={31}
                                                    cy="1.66683"
                                                    r="1.66667"
                                                    transform="rotate(-90 31 1.66683)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="45.6667"
                                                    cy="45.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 45.6667 45.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="45.6667"
                                                    cy="1.66683"
                                                    r="1.66667"
                                                    transform="rotate(-90 45.6667 1.66683)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="60.3333"
                                                    cy="45.3338"
                                                    r="1.66667"
                                                    transform="rotate(-90 60.3333 45.3338)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="60.3333"
                                                    cy="1.66683"
                                                    r="1.66667"
                                                    transform="rotate(-90 60.3333 1.66683)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="88.6667"
                                                    cy="45.3338"
                                                    r="1.66667"
                                                    transform="rotate(-90 88.6667 45.3338)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="88.6667"
                                                    cy="1.66683"
                                                    r="1.66667"
                                                    transform="rotate(-90 88.6667 1.66683)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="117.667"
                                                    cy="45.3338"
                                                    r="1.66667"
                                                    transform="rotate(-90 117.667 45.3338)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="117.667"
                                                    cy="1.66683"
                                                    r="1.66667"
                                                    transform="rotate(-90 117.667 1.66683)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="74.6667"
                                                    cy="45.3338"
                                                    r="1.66667"
                                                    transform="rotate(-90 74.6667 45.3338)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="74.6667"
                                                    cy="1.66683"
                                                    r="1.66667"
                                                    transform="rotate(-90 74.6667 1.66683)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={103}
                                                    cy="45.3338"
                                                    r="1.66667"
                                                    transform="rotate(-90 103 45.3338)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={103}
                                                    cy="1.66683"
                                                    r="1.66667"
                                                    transform="rotate(-90 103 1.66683)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={132}
                                                    cy="45.3338"
                                                    r="1.66667"
                                                    transform="rotate(-90 132 45.3338)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={132}
                                                    cy="1.66683"
                                                    r="1.66667"
                                                    transform="rotate(-90 132 1.66683)"
                                                    fill="#3056D3"
                                                />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
                            <div className="mt-10 lg:mt-0">
                                <span className="block mb-2 text-lg font-semibold text-primary">
                                    Connect With Social Workers
                                </span>
                                <h2 className="mb-8 text-3xl font-bold text-dark sm:text-4xl">
                                    Let's get Help from social workers.
                                </h2>
                                <p className="mb-8 text-base text-body-color">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, fuga dolorem. Sint, illo! Libero dignissimos quibusdam tempore odio velit ab ducimus magnam voluptate deserunt similique eius laborum, qui recusandae suscipit nam magni culpa ipsum nisi perferendis rerum reprehenderit iste. Accusamus molestiae natus accusantium beatae repudiandae praesentium vel, aut aliquam minima?
                                </p>
                                <a
                                    href="/#"
                                    className="inline-flex items-center justify-center px-10 py-4 text-base font-normal text-center text-white rounded-lg bg-primary hover:bg-opacity-90 lg:px-8 xl:px-10 no-underline"
                                >
                                    Get Help
                                </a>
                            </div>
                        </div>
                    </div>
                {/* </div> */}
            </section>
        </>
    )
}

export default SocWkSv
