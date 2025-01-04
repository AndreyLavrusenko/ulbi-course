import React from "react";
import { Flex, FlexProps } from "@/shared/ui/Stack/Flex/Flex";

type HStackProps = Omit<FlexProps, "direction">

export const HStack = (props: HStackProps) => (
    <Flex direction="row" {...props} />
);
