import React from "react";
import { baseColors, darkColors, lightColors } from "../../theme/colors";
import { Flex, Box } from "../Box";
import { Link } from "../Link";
import {
  StyledFooter,
  StyledIconMobileContainer,
  StyledList,
  StyledListItem,
  StyledSocialLinks,
  StyledToolsContainer,
  StyledFooterSocialLinks
} from "./styles";
import { FooterProps } from "./types";
import { ThemeSwitcher } from "../ThemeSwitcher";
import LangSelector from "../LangSelector/LangSelector";
import CakePrice from "../CakePrice/CakePrice";
import { LogoIcon, ArrowForwardIcon } from "../Svg";
import { Button } from "../Button";
import { Colors } from "../..";

const MenuItem: React.FC<FooterProps> = ({ items, isDark, toggleTheme, currentLang, langs, setLang, cakePriceUsd, buyCakeLabel, ...props
}) => {
  return (
    <div {...props}>
      <StyledFooter justifyContent="center" p={["40px 16px", null, "56px 40px 0px 40px"]}>
        <Flex flexDirection="column" width={["100%", null, "1200px;"]}>
          <StyledIconMobileContainer display={["block", null, "none"]}>
            <LogoIcon width="130px"/>
          </StyledIconMobileContainer>
          <Flex
            order={[2, null, 1]}
            flexDirection={["column", null, "row"]}
            justifyContent="space-between"
            alignItems="flex-start"
            mb={["42px", null, "36px"]}
          >
            <Box display={["none", null, "block"]}>
              <LogoIcon width="80px"/>
            </Box>
            {items?.map((item) => (
              <StyledList key={item.label}>
                <StyledListItem>{item.label}</StyledListItem>
                {item.items?.map(({ label, href, isHighlighted = false }) => (
                  <StyledListItem key={label}>
                    <Link
                      href={href}
                      target="_black"
                      rel="noreferrer noopener"
                      color={isHighlighted ? baseColors.warning : darkColors.text}
                      bold={false}
                    >
                      {label}
                    </Link>
                  </StyledListItem>
                ))}
              </StyledList>
            ))}
          </Flex>

          <StyledToolsContainer
            order={[1, null, 3]}
            flexDirection={["column", null, "row"]}
            justifyContent="flex-end"
          >
            <Flex order={[1, null, 2]} mb={["24px", null, "0"]} justifyContent="space-between" alignItems="flex-">
              <Button
                as="a"
                href="https://candyswap.one/swap?outputCurrency=0x794F13ec3b4260f4d734310bF151a0a4428ff856"
                target="_blank"
                scale="md"
                variant="black"
                endIcon={<ArrowForwardIcon color={lightColors.backgroundAlt}/>}
              >
                {buyCakeLabel}
              </Button>
            </Flex>
          </StyledToolsContainer>
        </Flex>
      </StyledFooter>
      <StyledFooterSocialLinks justifyContent="center">
        <StyledSocialLinks order={[2]} pt={["42px", null, "32px"]} pb={["42px", null, "32px"]}/>
      </StyledFooterSocialLinks>
    </div>
  );
};

export default MenuItem;
