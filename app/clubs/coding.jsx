import React from 'react'
import Image from 'next/image'
import test from '/public/computer.svg'
import { Icon } from '@iconify/react'
import { motion, stagger } from 'framer-motion'
export default function ClubDetails() {
    const CodeEditorDescription = ({ description }) => {
        const [lines, setLines] = React.useState([]);
        const textRef = React.useRef(null);

        React.useEffect(() => {
            if (textRef.current) {
                const lineHeight = parseInt(window.getComputedStyle(textRef.current).lineHeight);
                const height = textRef.current.clientHeight;
                const lineCount = Math.ceil(height / lineHeight);
                setLines(Array.from({ length: lineCount  }, (_, i) => i + 1));
            }
        }, [description]);

        return (
            <div className="border-2 border-black font-mono text-sm">
                <div className="bg-orange-50
                 flex justify-between gap-2 px-3 py-2  border-b-2 border-black">
                    <div className="flex gap-2">
                        <Icon icon="ri:terminal-box-fill" className="text-xl" />
                        <div className="font-bold">Terminal</div>
                    </div>
                    <div className="flex gap-3">
                        <div className="w-3 h-3 border-2 border-black rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 border-2 border-black rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 border-2 border-black rounded-full bg-green-500"></div>
                    </div>
                </div>
                <div className="bg-primary/30 flex md:min-h-[14.42rem]">
                    <div className="border-r-2 border-black/30 px-2 text-right text-gray-500  flex flex-col justify-center items-center    ">
                        {lines.map((num) => (
                            <div key={num} className="select-none leading-6">{num}</div>
                        ))}
                    </div>
                    <pre ref={textRef} className="whitespace-pre-wrap p-3 text-base md:text-xl flex-1"><span className="font-semibold">{`$ `}</span>
                        {description}
                    </pre>
                </div>
            </div>
        );
    };

    const clubData = {
        name: 'COMPETITIVE CODING',
        memberCount: '30',
        leader: 'Naveed SNR',
        meetingDay: 'Tuesday',
        meetingTime: '21:00',
        description: 'Welcome to the Competitive Coding Club! Our mission is to foster a community of passionate coders and developers who thrive on solving complex problems and creating innovative solutions. Whether you\'re a seasoned programmer or just starting out, our club provides the perfect environment to sharpen your skills and expand your knowledge. Participate in coding challenges, workshops, and study sessions covering data structures, algorithms, and competitive programming techniques. Compete in national and international coding competitions, gain valuable experience, and join a vibrant community that celebrates coding excellence and continuous learning.'
    }
    const terminalVariants = {
        offscreen: {

            x: -100,
            opacity: 0,
        },
        onscreen: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                duration: 1.82,
            }
        }
    };


    const lineVariants = {

        offscreen: {
            opacity: 0,
            height: 0,
        },
        onscreen: {
            opacity: 1,
            height: 300,
            transition: {
                type: "spring",
                duration: 1.82,
            }
        }
    }
    const infoVariants = {
        offscreen: {

            x: 100,
            opacity: 0,
        },
        onscreen: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                duration: 1.82,
                staggerChildren: 0.3,
            }
        }
    }

    return (
        <>
            <div className="flex flex-wrap md:flex-nowrap md:h-[83%] h-full w-full bg-emerald-50 md:border border-black relative overflow-hidden">
                <div className="flex flex-col md:w-[62.3%]">
                    <div className="w-full md:w-1/2 border-b border-t md:border-t-0 border-r border-black py-2 flex justify-center items-center text-lg md:text-xl">
                        <div className="flex gap-3">
                            <div className="flex items-center gap-1 w-max border-black/30 px-3">
                                <Icon icon="material-symbols:person" />
                                <p>{`${clubData.memberCount} Active Members`}</p>
                            </div>
                            {/* <div className="flex items-center gap-1 w-max">
                                    <Icon icon="material-symbols:social-leaderboard-outline" />
                                    <p>Founded: 2018</p>
                                </div> */}
                        </div>
                    </div>
                    <div className="flex md:flex-row flex-wrap w-full h-full justify-center md:justify-between relative ">
                        <div className="flex flex-col md:px-14 md:ms-8 mt-3 p-3 text-[3rem] md:text-8xl w-full md:w-1/2 font-headline leading-tight">
                            <div>
                                <span className="outline-text">WELCOME TO</span><br />
                                {`${clubData.name}`}<br />
                            </div>
                            <div className="flex flex-col  md:ms-4 m-2 md:m-3 text-2xl ">
                                <div className="flex items-center w-max gap-2">
                                    <p>LED BY</p>
                                </div>
                                <p className="font-light text-2xl">Naveed SNR</p>
                            </div>
                            <button className="md:ms-4 md:w-11/12 px-11 py-1 bg-primary text-lg font-light border-2 border-black">
                                Become A Member
                            </button>
                        </div>
                    </div>
                    <div className="flex relative justify-end md:mb-0">
                        <div className="flex w-full  md:w-1/2 border border-black md:border-r-0 md:border-b-0 justify-center items-center gap-3 text-lg font-thin py-2 px-8 mx-3 md:mx-0">
                                <Icon icon="streamline:group-meeting-call-solid" />
                                <p>Meets Tuesdays at 7PM</p>
                        </div>
                    </div>
                        <div className="hidden absolute bottom-0 md:flex justify-start flex-col w-14 p-3 border-t border-r border-black h-32 items-center">
                            <div className="text-sm">SCROLL</div>
                            <div className="w-full flex justify-center">
                                {/* Arrow Icon */}
                                <svg className="scale-y-110 mt-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.83} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                </svg>
                            </div>
                        </div>
                </div>
                <div className="self-end md:absolute right-0 bottom-0 h-11/12 md:w-[37.7%] border md:border-r-0 md:border-b-0 border-black m-4 md:m-0  ">
                        <Image
                            src={test}
                            alt="Competitive Coding Illustration"
                            className="mb-11"
                            objectFit='fill'
                        />
                    </div>

            </div>
            <motion.div
            animate={{delay: stagger(1)}} className="border-t border-b border-black/30 relative flex flex-col items-center mt-[5.42rem] justify-center w-full mb-11">
                <h1 className="self-center text-[3rem] my-11">About Us</h1>
                <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    variants={terminalVariants}
                    className="w-full md:w-9/12 px-4">
                    <CodeEditorDescription description={clubData.description} />
                </motion.div>
                <motion.div 
               className="relative flex flex-wrap md:flex-nowrap md:gap-14 md:justify-center w-full md:w-9/12 mb-11 px-3 md:px-0 overflow-x-hidden">
                    <motion.div
                        initial="offscreen"
                        whileInView="onscreen"
                        variants={lineVariants}
                        viewport={{amount: 0.3}} 
                        className="md:z-0  ms-[11rem] md:max-h-fit max-h-32 h-32 md:h-96 border border-black"></motion.div>

                    <motion.div
                        layout
                        initial="offscreen"
                        whileInView="onscreen"
                        variants={infoVariants}
                        className="bg-emerald-50 md:mt-11 w-full  md:w-9/12 h-fit p-3 md:p-11 border border-black ">
                        <div className="text-4xl font-bold">What we do?</div>
                        <div className="text-black/90 my-3">{`Here's a few skills that we focus on. We host a number of activites to help you develop useful experiences and enhance your creativity and productivity.`}</div>
                        <div className="flex flex-wrap justify-center md:justify-start gap-3">
                            {['AI/ML', 'UI/UX', 'Web dev'].map((skill) => (
                                <motion.div
                                    variants={infoVariants}
                                    key={skill}
                                    className="flex flex-col gap-3 justify-center items-center bg-orange-50 w-24 h-24 min-w-24 min-h-24 md:w-32 md:h-32 p-3 border border-black"

                                >
                                    <Icon icon={getIconForSkill(skill)} className="text-3xl md:text-8xl" />
                                    <div>{skill}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

            </motion.div>
        </>

    )
}

function getIconForSkill(skill) {
    switch (skill) {
        case 'AI/ML':
            return "heroicons:cpu-chip-solid";
        case 'UI/UX':
            return "fluent:design-ideas-16-filled";
        case 'Web dev':
            return "ri:code-box-fill";
        default:
            return "";
    }
}