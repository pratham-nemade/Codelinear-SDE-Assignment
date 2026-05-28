import { ShieldCheck, Layers3, Globe, Sparkles, Waves, Hexagon } from "lucide-react";
import { ArrowLeft, ArrowRight, Zap, Shield, TrendingUp } from "lucide-react";

import Icon1 from "../assets/Solutions1.png";
import Icon2 from "../assets/Solutions2.png";
import Icon3 from "../assets/Solutions3.png";
import Icon4 from "../assets/Solutions4.png";
import Icon5 from "../assets/Solutions5.png";

import banking1 from "../assets/banking1.png";
import banking2 from "../assets/banking2.png";
import banking3 from "../assets/banking3.png";

import Pattern from "../assets/vector.png";

export const brands = [
    { name: "SHELLS", icon: ShieldCheck },
    { name: "SmartFinder", icon: Layers3 },
    { name: "Zoomerr", icon: Globe },
    { name: "ArtVenue", icon: Sparkles },
    { name: "kontrastr", icon: Hexagon },
    { name: "WAVESMARATHON", icon: Waves },
];



export const solutions = [
    {
        icon: Icon1,
        tag: null,
        title: "Core Banking CB7",
        description:
            "CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your employees, improve risk management, increase productivity, and ensure full regulatory compliance.",
    },
    {
        icon: Icon2,
        tag: null,
        title: "Digital Banking N7",
        description:
            "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients",
    },
    {
        icon: Icon3,
        tag: null,
        title: "Open Banking",
        description:
            "Our API banking helps you to gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation, offer predictive budgeting tools, and introduce enhanced credit scoring.",
    },
    {
        icon: Icon4,
        tag: "NBFC",
        title: "Loan Origination System",
        description:
            "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients",
    },
    {
        icon: Icon5,
        tag: "NBFC",
        title: "Loan Management System",
        description:
            "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients",
    },
];

export const featureColumns = [
    [
        "Customer-On Boarding",
        "Managing deposits and withdrawals",
        "Transaction management",
        "Interest Calculation",
        "Payments processing (cash, cheques, mandates, NEFT, RTGS etc)",
    ],
    [
        "CRM Activities",
        "Configuring New Banking Products",
        "Loan disbursal and Loan management",
        "Establishing criteria for minimum balances, interest rates, number of withdrawals allowed and so on.",
    ],
];

export const marqueeItems = [
    { text: "N7", isHighlight: true },
    { text: "Say" },
    { text: "👋", isEmoji: true },
    { text: "to the new way of banking" },
    { text: "CB7", isHighlight: true },
    { text: "Say" },
    { text: "👋", isEmoji: true },
    { text: "to the new way of banking" },
];

export const digitalBankingFeatures = [
    {
        title: "Fully compliant with regulatory requirement",
        description:
            "The governance of risk management with regulations is achieved by our risk management framework that is fully integrated to work with digital bank's operational-risk protocols and procedures.",
        points: [
            "Pre-integrated Security System",
            "Fully Compliant With Regulatory Requirement",
            "Digitally Connected Core",
        ],
        imagePosition: "left",
        image: banking1,
    },
    {
        title: "No legacy IT systems",
        description:
            "Our Digital Banking solution and multilayered approach help financial institutions take advantage of digital transformation by ensuring customer trust and regulatory compliance.",
        points: [
            "Adaptive & Intelligent API monetization",
            "Ambient User Experience",
            "Cloud-native With lower TCO",
        ],
        imagePosition: "right",
        image: banking2,
    },
    {
        title: "No traditional branches",
        description:
            "Our Digital Banking out-of-the-box helps you to accelerate innovation while reducing risks and optimising operational costs for a seamless branchless experience.",
        points: [
            "Branchless & Paperless Banking",
            "Digital Transformation Capability",
            "Optimized, Adoptable and Scalable",
        ],
        imagePosition: "left",
        image: banking3,
    },
];

export const insights = [
    {
        category: "GETTING STARTED",
        title: "How to transition from a traditional to a digital bank",
        author: "David Grohl",
        date: "17/08/24",
        featured: true,
    },
    {
        category: "GETTING STARTED",
        title: "How to transition from a traditional to a digital bank",
        author: "David Grohl",
        date: "17/08/24",
        featured: false,
    },
    {
        category: "GETTING STARTED",
        title: "How to transition from a traditional to a digital bank",
        author: "David Grohl",
        date: "17/08/24",
        featured: false,
    },
];

export const cases = [
    {
        category: "GETTING STARTED",
        title: "How we help brand reach out to more people",
        company: "Zoomerr",
        CompanyIcon: Zap,
        pattern: Pattern,
    },
    {
        category: "DIGITAL BANKING",
        title: "Transforming online payments for global reach",
        company: "FinVault",
        CompanyIcon: Globe,
        pattern: Pattern,
    },
    {
        category: "SECURITY",
        title: "How we secured millions of transactions daily",
        company: "TrustLayer",
        CompanyIcon: Shield,
        pattern: Pattern,
    },
    {
        category: "GROWTH",
        title: "Scaling a fintech startup from 0 to 1 million users",
        company: "GrowthPay",
        CompanyIcon: TrendingUp,
        pattern: Pattern,
    },
];

export const offices = [
    {
        city: "London",
        text: "Linktia Infosystems Ltd – CB7, 26 Main Road Sundridge, TN14 6EP, England, United Kingdom.",
    },
    {
        city: "Dubai",
        text: "Linktia Infosystems Ltd – CB7, Jumeirah Business Center 5, Cluster W, Jumeirah Lakes Towers, Dubai, United Arab Emirates",
    },
    {
        city: "Pune",
        text: "Linktia Infosystems Ltd – CB7, Nirmal, Anand Nagar, Suncity Road, Pune, Maharashtra, 411041, India",
    },
];

export const Footersolutions = [
    "Core Banking CB7",
    "Digital Banking N7",
    "Open Banking",
    "Loan Origination System",
    "Loan Management System",
    "Digital Transformation",
];

export const banking = [
    "About Us",
    "Solutions",
    "Contact",
    "Company",
    "Careers",
    "Insights",
    "Core Team",
    "Brand Center",
];

export const socials = ["LinkedIn", "X"];