import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import IconButton from "@mui/material/IconButton";
import { myTheme } from "@gossip/theme";

const Profile = () => {
  return (
    // <div>Home profile</div>
    <Stack padding={'48px'} gap={"16px"}>
      {/* //icon button */}
      <Stack alignItems={"flex-start"}>
        <Image
          src="/assets/icons/misc/profile/Ellipse 12.svg"
          alt="profileimg"
          height={64}
          width={64}
          unoptimized
        />

        <Image
          src="/assets/icons/misc/profile/verified.svg"
          alt="verigyicon"
          width={18}
          height={18}
          unoptimized
          style={{ position: "absolute", marginTop: "43px", marginLeft: "1px" }}

        />

      </Stack>
      <Stack
        alignSelf={"stretch"}
        flexDirection={"column"}
        alignItems={"flex-start"}
        padding={"8px 0px"}
        gap={"16px"}
      >
        <Stack>
          <Typography
            sx={{
              gap: "8px",
              fontSize: "20px",
              fontWeight: 700,
              lineHeight: "19px",
            }}
          >
            Deepak Yadu
          </Typography>
        </Stack>

        <Stack
          flexDirection={"row"}
          alignItems={"center"}
          sx={{
            width: "71px",
            height: "19px",
            gap: "8px",
          }}
        >
          <Typography
            sx={{
              lineHeight: "19px",
              fontSize: "12px",
              fontWeight: 500,
            }}
          >
            dk404found
          </Typography>

          <Typography
            sx={{
              borderRadius: "48px",
              padding: "7px 12px",
              fontSize: "9px",
              fontWeight: 500,
              lineHeight: "10px",
              textTransform: "none",
              bgcolor: "#EEEEEE",
            }}
            color={myTheme.text.light.inactive}
          >

            threads.net
          </Typography>
        </Stack>

        <Stack>
          <Typography
            alignSelf={"stretch"}
            sx={{
              fontSize: "12px",
              fontWeight: 500,
              lineHeight: "19px",
            }}
          >
            Senior Frontend Developer | Exploring the art of programming
            <br />
            deepak@newklio.com
          </Typography>
        </Stack>
        {/*  */}

        <Stack
          gap={"4px"}
          height={"19px"}
          flexDirection={"row"}
          alignItems={"center"}
        >
          <Typography
            letterSpacing={-0.2}
            sx={{
              fontSize: "13px",
              fontWeight: "400",
              lineHeight: "19px",
            }}
            color={myTheme.text.light.inactive}
          >
            2957 followers
          </Typography>

          <Stack>
            <Image
              src="/assets/icons/misc/profile/Ellipse 5.svg"
              alt="dot"
              height={2}
              width={2}
              unoptimized
            />
          </Stack>

          <Typography
            letterSpacing={-0.2}
            sx={{
              fontSize: "13px",
              fontWeight: "400",
              lineHeight: "19px",
            }}
            color={myTheme.text.light.inactive}
          >
            456 following
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Profile;
