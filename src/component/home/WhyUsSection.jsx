import * as React from "react"
import { motion } from "framer-motion"
import {
    Network,
    ShieldCheck,
    Truck,
    Headphones,
} from "lucide-react"

const ease = [0.22, 1, 0.36, 1]

const reasons = [
    {
        number: "01",
        title: "Strong Supplier Network",
        description:
            "A diversified network of trusted manufacturers and suppliers across polymers, chemicals and industrial materials.",
        icon: Network,
        image:
            "https://images.unsplash.com/photo-1782398138808-694776d26c4c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fFN0cm9uZyUyMFN1cHBsaWVyJTIwTmV0d29ya3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        number: "02",
        title: "Quality Focus",
        description:
            "We focus on specifications, consistency and application suitability to help you source the right material.",
        icon: ShieldCheck,
        image:
            "https://plus.unsplash.com/premium_photo-1723878003390-3f52cd863daf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8UXVhbGl0eSUyMEZvY3VzfGVufDB8fDB8fHww",
    },
    {
        number: "03",
        title: "Reliable Supply",
        description:
            "From sourcing and packaging to logistics and delivery, we coordinate the complete supply process.",
        icon: Truck,
        image:
            "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UmVsaWFibGUlMjBTdXBwbHl8ZW58MHx8MHx8fDA%3D",
    },
    {
        number: "04",
        title: "Responsive Support",
        description:
            "Clear communication and ongoing support built around your business requirements.",
        icon: Headphones,
        image:
            "https://plus.unsplash.com/premium_photo-1661414473396-4600573d1f33?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFJlc3BvbnNpdmUlMjBTdXBwb3J0fGVufDB8fDB8fHww",
    },
]

export default function WhyChoose() {
    return (
        <section className="w-full bg-[#f7f4ed] px-5 py-14 md:px-10">
            <div
                className="
                    mx-auto grid max-w-6xl
                    grid-cols-1 gap-5 rounded-[26px]
                    bg-white/95 p-5
                    shadow-[0_25px_60px_rgba(25,45,48,0.08)]
                    md:grid-cols-2
                    lg:grid-cols-3
                "
            >
                {/* INTRO */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.25,
                    }}
                    transition={{
                        duration: 0.7,
                        ease,
                    }}
                    className="
                        flex min-h-[330px]
                        flex-col justify-start
                        px-1 py-8
                        md:px-0
                        lg:min-h-[360px]
                    "
                >
                    <h2
                        className="
                            max-w-[300px]
                            text-[40px] font-medium
                            leading-[1.05]
                            tracking-[-0.05em]
                            text-[#0d2461]
                            md:text-[46px]
                            lg:text-[48px]
                        "
                    >
                        Why
                        <br />
                        Choose
                        <br />
                        Resol Industry
                    </h2>

                    <p
                        className="
                            mt-7 text-[16px]
                            leading-[1.4]
                            tracking-[-0.025em]
                            text-[#4b4b4b]
                        "
                    >
                        Resol Industries Ltd.(RIL )is a prominent polymer products distributor founded in 2005
                        <br />
                        We specialize in the import and whole sale distribution of a wide range of high-quality polymers and chemicals
                    </p>
                </motion.div>

                {/* 01 */}
                <ReasonCard
                    reason={reasons[0]}
                    delay={0.08}
                />

                {/* 02 */}
                <ReasonCard
                    reason={reasons[1]}
                    delay={0.16}
                />

                {/* 03 */}
                <ReasonCard
                    reason={reasons[2]}
                    delay={0.24}
                    large
                />

                {/* 04 */}
                <ReasonCard
                    reason={reasons[3]}
                    delay={0.32}
                />
            </div>
        </section>
    )
}


/* ------------------------------------------------ */
/* IMAGE REASON CARD                                */
/* ------------------------------------------------ */

function ReasonCard({
    reason,
    delay = 0,
    large = false,
}) {
    const Icon = reason.icon

    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 30,
                scale: 0.97,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
            }}
            whileHover={{
                y: -5,
            }}
            viewport={{
                once: true,
                amount: 0.2,
            }}
            transition={{
                duration: 0.7,
                delay,
                ease,
            }}
            className={`
                group relative
                min-h-[330px]
                overflow-hidden
                rounded-[15px]
                ${large
                    ? "md:col-span-2 lg:min-h-[360px]"
                    : "lg:min-h-[360px]"
                }
            `}
        >
            {/* IMAGE */}
            <motion.img
                src={reason.image}
                alt={reason.title}
                className="
                    absolute inset-0
                    h-full w-full
                    object-cover
                "
                initial={{
                    scale: 1,
                }}
                animate={{
                    y: [0, -4, 0],
                }}
                transition={{
                    y: {
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    },
                }}
                whileHover={{
                    scale: 1.07,
                }}
            />

            {/* DARK OVERLAY */}
            <div
                className="
                    absolute inset-0
                    bg-gradient-to-b
                    from-black/35
                    via-black/10
                    to-[#061d2b]/90
                    transition-all
                    duration-500
                    group-hover:from-black/45
                    group-hover:via-black/20
                    group-hover:to-[#061d2b]/95
                "
            />

            {/* TOP CONTENT */}
            <div
                className="
                    absolute left-5 right-5
                    top-5 z-10
                    flex items-start
                    justify-between
                "
            >
                <span
                    className="
                        text-[13px]
                        font-medium
                        tracking-[0.12em]
                        text-white/70
                    "
                >
                    {reason.number}
                </span>

                <motion.div
                    whileHover={{
                        rotate: -8,
                        scale: 1.1,
                    }}
                    transition={{
                        duration: 0.3,
                    }}
                    className="
                        flex h-11 w-11
                        items-center justify-center
                        rounded-full
                        border border-white/25
                        bg-white/10
                        text-white
                        backdrop-blur-md
                    "
                >
                    <Icon
                        size={20}
                        strokeWidth={1.7}
                    />
                </motion.div>
            </div>

            {/* TEXT */}
            <div
                className="
                    absolute
                    bottom-0 left-0 right-0
                    z-10 p-5
                "
            >
                <h3
                    className="
                        text-[21px]
                        font-medium
                        leading-[1.1]
                        tracking-[-0.035em]
                        text-white
                    "
                >
                    {reason.title}
                </h3>

                <p
                    className="
                        mt-3
                        max-w-[600px]
                        text-[15px]
                        leading-[1.45]
                        tracking-[-0.015em]
                        text-white/75
                    "
                >
                    {reason.description}
                </p>
            </div>

            {/* HOVER SHINE */}
            <motion.div
                initial={{
                    x: "-150%",
                }}
                whileHover={{
                    x: "150%",
                }}
                transition={{
                    duration: 0.9,
                    ease,
                }}
                className="
                    pointer-events-none
                    absolute -top-20 left-0
                    z-20 h-[500px] w-[100px]
                    rotate-[20deg]
                    bg-gradient-to-r
                    from-transparent
                    via-white/25
                    to-transparent
                "
            />

            {/* BOTTOM LINE */}
            <motion.div
                initial={{
                    width: 0,
                }}
                whileHover={{
                    width: "100%",
                }}
                transition={{
                    duration: 0.5,
                    ease,
                }}
                className="
                    absolute bottom-0
                    left-0 z-30
                    h-[3px]
                    bg-white
                "
            />
        </motion.div>
    )
}