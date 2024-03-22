import { ComponentClass, FunctionComponent } from "react";
import { awards, cardContent, opinions, posterData, teamMembers } from "./data";


export type SectionProps = {
    children?: React.ReactNode;
    className?: string;
}

export type ButtonProps = {
    children: React.ReactNode;
    className?: string;
}

export type VideoProps = {
    src: string;
    className?: string;
}

export type ClientCardProps = {
    imageSrc: string
}

export type CardProps = typeof cardContent[number];

export type SwiperArrowsProps = {
    type: 'prev' | 'next';
    onClick: React.MouseEventHandler,
    className?: string,
    ArrowClassName?: string
}

export type HeadingProps = {
    props?: object | null;
    children: React.ReactNode;
    className?: string,
}

export type ProjectCardProps = typeof posterData[number];

export type TeamCardProps = typeof teamMembers[number]

export type AwardsProps = typeof awards[number]

export type OpinionCardProps = typeof opinions[number];