"use client";

import * as React from "react";
import {
    HoverCard,
    HoverCardTrigger,
    HoverCardContent,
} from "@/components/ui/hover-card";

interface HoverCardProps {
    title: string;
    data: React.ReactNode;
    children: React.ReactNode;
}

export function MainHoverCard({ title, data, children }: HoverCardProps) {
    return (
        <HoverCard>
            <HoverCardTrigger asChild>
                {children}
            </HoverCardTrigger>
            <HoverCardContent className="w-64">
                <div className="font-semibold text-lg mb-2">{title}</div>
                <div>{data}</div>
            </HoverCardContent>
        </HoverCard>
    );
}