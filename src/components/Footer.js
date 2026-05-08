import React from 'react'
import { indiaOffices } from '../data'

const Footer = () => {
    return (
        <footer>
            <div className="max-w-[1200px] mx-auto px-7 sm:px-7 md:px-8 xl:px-0">
                <div className="py-20">
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 md:gap-12">
                        <div>
                            <h2 className="lg:text-3xl md:text-[24px] text-3xl font-medium md:mb-4">
                                Our <span className='font-pacificoCursive text-vivid-yangelo'>India</span> Offices
                            </h2>
                            <p>Penta Freight delivers seamless logistics across India, with branches in key cities for your convenience.</p>
                        </div>

                        {indiaOffices.map((office) => (
                            <div key={office.id}>
                                <h3 className="font-medium md:text-2xl md:mb-7">{office.location}</h3>
                                <ul className='mt-2'>
                                    <li className='my-1'>
                                        <a
                                            href={office.addressLink}
                                            className="text-sm text-bold-grey hover:text-vivid-yangelo transition ease-in-out"
                                            target='_blank'
                                            rel="noreferrer"
                                        >
                                            <div className='leading-6' dangerouslySetInnerHTML={{ __html: office.address }}></div>
                                        </a>
                                    </li>
                                    <li className='my-1'>
                                        <a
                                            href={`tel: ${office.number}`}
                                            className="text-sm text-bold-grey hover:text-vivid-yangelo transition ease-in-out"
                                        >
                                            {office.number}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="grid gap-8 pt-5 mt-12 sm:grid-cols-2 lg:grid-cols-4 md:gap-12">
                        <div>
                            <h2 className="lg:text-3xl md:text-[24px] text-3xl font-medium md:mb-4">
                                Our <span className='font-pacificoCursive text-vivid-yangelo'>USA</span> Offices
                            </h2>
                            <p>Penta Freight has expanded its operations globally, beginning with the USA, to offer continuous support across continents.</p>
                        </div>

                        <div >
                            <h3 className="font-medium md:text-2xl md:mb-7">Chicago</h3>
                            <ul className='mt-2'>
                                <li className='my-1'>
                                    <a
                                        href="https://maps.app.goo.gl/5Ff3p1JExvcXqF348"
                                        className="text-sm text-bold-grey hover:text-vivid-yangelo transition ease-in-out"
                                        target='_blank'
                                        rel="noreferrer"
                                    >
                                        Penta Freight Pvt.Ltd 5100 Newport Dr. <br />  Sute 4, Rolling Meadows, IL 60008 USA
                                    </a>
                                </li>
                                <li className='my-1'>
                                    <a
                                        href={`tel: +040 234 6559`}
                                        className="text-sm text-bold-grey hover:text-vivid-yangelo transition ease-in-out"
                                    >
                                        +040 234 6559
                                    </a>{" "}
                                    /{" "}
                                    <a
                                        href={`tel: +224 434 2154 `}
                                        className="text-sm text-bold-grey hover:text-vivid-yangelo transition ease-in-out"
                                    >
                                        +224 434 2154
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    )
}

export default Footer
