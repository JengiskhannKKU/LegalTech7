"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Avatar,
  Box,
  Button,
  Chip,
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import {
  DashboardOutlined,
  DescriptionOutlined,
  HomeWorkOutlined,
  Inventory2Outlined,
  ShieldOutlined,
  SupportAgentOutlined,
} from "@mui/icons-material";

const navItems = [
  { label: "ภาพรวม", icon: <DashboardOutlined fontSize="small" />, href: "/dashboard" },
  { label: "ที่ดินของฉัน", icon: <HomeWorkOutlined fontSize="small" />, href: "/dashboard/lands" },
  { label: "แพ็กเกจบริการ", icon: <Inventory2Outlined fontSize="small" />, href: "/dashboard/packages" },
  { label: "เอกสารกฎหมาย", icon: <DescriptionOutlined fontSize="small" />, href: "/dashboard/documents" },
  { label: "ปรึกษาทนาย", icon: <SupportAgentOutlined fontSize="small" />, href: "/dashboard/consultation" },
  { label: "ประกันภัยที่ดิน", icon: <ShieldOutlined fontSize="small" />, href: "/dashboard/insurance" },
];

const landCards = [
  {
    title: "แปลงที่ 1: เชียงใหม่ (โฉนด #8821)",
    detail: "เนื้อที่: 2 ไร่ 1 งาน · ปล่อยเช่าเกษตร",
    planLabel: "Plan: Standard",
    planTone: { background: "rgba(220, 38, 38, 0.12)", color: "#dc2626" },
    statusLabel: "กำลังเฝ้าระวัง",
    statusTone: { background: "rgba(14, 116, 144, 0.12)", color: "#0e7490" },
    mapLabel: "CNX-8821",
    actionLabel: "ดูรายละเอียด",
    actionHref: "/dashboard",
    actionVariant: "outlined" as const,
  },
  {
    title: "แปลงที่ 2: ขอนแก่น (โฉนด #1044)",
    detail: "เนื้อที่: 100 ตร.ว. · ที่ดินเปล่า",
    planLabel: "Plan: Free",
    planTone: { background: "rgba(148, 163, 184, 0.2)", color: "#475569" },
    statusLabel: "ยังไม่เปิดการเฝ้าระวัง",
    statusTone: { background: "rgba(251, 191, 36, 0.18)", color: "#b45309" },
    mapLabel: "KKN-1044",
    actionLabel: "อัปเกรดเพื่อดูความเสี่ยง",
    actionHref: "/dashboard/packages",
    actionVariant: "contained" as const,
  },
];

const easingCurve = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easingCurve },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function LandMyLands() {
  const pathname = usePathname();

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: 4, lg: 6 } }}>
      <motion.section initial="hidden" animate="visible" variants={stagger}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "260px 1fr" },
            gap: { xs: 3, lg: 4 },
            alignItems: "start",
          }}
        >
          <motion.div variants={fadeUp}>
            <Paper
              elevation={0}
              sx={(theme) => ({
                borderRadius: 4,
                overflow: "hidden",
                border: `1px solid ${alpha(theme.palette.common.white, 0.08)}`,
                background:
                  "linear-gradient(180deg, rgba(15, 23, 42, 1) 0%, rgba(30, 41, 59, 1) 100%)",
                color: "#e2e8f0",
              })}
            >
              <Stack spacing={3}>
                <Box
                  sx={{
                    p: 3,
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    background:
                      "linear-gradient(135deg, rgba(15, 23, 42, 1) 0%, rgba(30, 64, 175, 1) 100%)",
                  }}
                >
                  <Avatar
                    sx={{
                      width: 42,
                      height: 42,
                      backgroundColor: "rgba(248, 250, 252, 0.18)",
                      color: "#f8fafc",
                    }}
                  >
                    <ShieldOutlined fontSize="small" />
                  </Avatar>
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                      LandGuard AI
                    </Typography>
                    <Typography variant="caption" sx={{ color: "rgba(226,232,240,0.7)" }}>
                      ระบบเฝ้าระวังความเสี่ยงที่ดิน
                    </Typography>
                  </Box>
                </Box>
                <List sx={{ px: 1, pb: 2 }}>
                  {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <ListItemButton
                        key={item.label}
                        component={Link}
                        href={item.href}
                        selected={isActive}
                        sx={{
                          borderRadius: 2,
                          px: 2,
                          py: 1,
                          mb: 0.5,
                          color: isActive
                            ? "#f8fafc"
                            : "rgba(226, 232, 240, 0.72)",
                          backgroundColor: isActive
                            ? "rgba(56, 189, 248, 0.18)"
                            : "transparent",
                          "&:hover": {
                            backgroundColor: "rgba(56, 189, 248, 0.16)",
                          },
                          "&.Mui-selected": {
                            backgroundColor: "rgba(56, 189, 248, 0.2)",
                          },
                          "&.Mui-selected:hover": {
                            backgroundColor: "rgba(56, 189, 248, 0.24)",
                          },
                          "& .MuiListItemIcon-root": {
                            minWidth: 36,
                            color: "inherit",
                          },
                          "& .MuiListItemText-primary": {
                            fontSize: 14,
                            fontWeight: isActive ? 600 : 500,
                          },
                        }}
                      >
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.label} />
                      </ListItemButton>
                    );
                  })}
                </List>
              </Stack>
            </Paper>
          </motion.div>

          <Stack spacing={3}>
            <motion.div variants={fadeUp}>
              <Stack
                direction={{ xs: "column", md: "row" }}
                justifyContent="space-between"
                alignItems={{ md: "center" }}
                spacing={2}
              >
                <Box>
                  <Typography variant="h4" sx={{ fontWeight: 700, color: "#0f172a" }}>
                    จัดการที่ดินของฉัน (My Lands)
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    ตรวจสอบสถานะแต่ละแปลงและจัดการแผนบริการของคุณได้ในที่เดียว
                  </Typography>
                </Box>
                <Stack direction="row" spacing={1.2} alignItems="center">
                  <Avatar
                    sx={{
                      width: 40,
                      height: 40,
                      backgroundColor: "#0f172a",
                      color: "#f8fafc",
                    }}
                  >
                    ส
                  </Avatar>
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                      สมชาย ใจดี
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      เจ้าของที่ดิน
                    </Typography>
                  </Box>
                </Stack>
              </Stack>
            </motion.div>

            <Grid container spacing={3}>
              {landCards.map((land) => (
                <Grid key={land.title} size={{ xs: 12, lg: 6 }}>
                  <motion.div variants={fadeUp}>
                    <Paper
                      elevation={0}
                      sx={(theme) => ({
                        borderRadius: 4,
                        border: `1px solid ${theme.palette.divider}`,
                        backgroundColor: "#ffffff",
                        p: 2.5,
                        height: "100%",
                        boxShadow: "0 12px 24px rgba(15, 23, 42, 0.06)",
                      })}
                    >
                      <Stack spacing={2} height="100%">
                        <Box
                          sx={{
                            position: "relative",
                            height: { xs: 160, md: 180 },
                            borderRadius: 3,
                            overflow: "hidden",
                            background:
                              "linear-gradient(135deg, rgba(203, 213, 225, 0.9), rgba(226, 232, 240, 1))",
                          }}
                        >
                          <Box
                            sx={{
                              position: "absolute",
                              inset: 0,
                              backgroundImage:
                                "linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(0deg, rgba(255,255,255,0.35) 1px, transparent 1px)",
                              backgroundSize: "26px 26px",
                              opacity: 0.7,
                            }}
                          />
                          <Chip
                            label={land.mapLabel}
                            size="small"
                            sx={{
                              position: "absolute",
                              top: 12,
                              left: 12,
                              backgroundColor: "rgba(15, 23, 42, 0.75)",
                              color: "#f8fafc",
                              fontWeight: 600,
                            }}
                          />
                          <Typography
                            variant="caption"
                            sx={{
                              position: "absolute",
                              bottom: 12,
                              left: 12,
                              color: "rgba(15, 23, 42, 0.6)",
                              fontWeight: 600,
                            }}
                          >
                            แผนที่แปลงที่ดิน
                          </Typography>
                        </Box>

                        <Stack spacing={1}>
                          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                            {land.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {land.detail}
                          </Typography>
                        </Stack>

                        <Stack direction="row" spacing={1} flexWrap="wrap">
                          <Chip
                            label={land.planLabel}
                            size="small"
                            sx={{
                              backgroundColor: land.planTone.background,
                              color: land.planTone.color,
                              fontWeight: 600,
                            }}
                          />
                          <Chip
                            label={land.statusLabel}
                            size="small"
                            sx={{
                              backgroundColor: land.statusTone.background,
                              color: land.statusTone.color,
                              fontWeight: 600,
                            }}
                          />
                        </Stack>

                        <Box sx={{ mt: "auto" }}>
                          <Button
                            component={Link}
                            href={land.actionHref}
                            variant={land.actionVariant}
                            fullWidth
                            sx={{
                              borderColor: "#1e3a8a",
                              color: land.actionVariant === "outlined" ? "#1e3a8a" : "#f8fafc",
                              backgroundColor:
                                land.actionVariant === "contained" ? "#1e3a8a" : "transparent",
                              "&:hover": {
                                backgroundColor:
                                  land.actionVariant === "contained" ? "#1d4ed8" : "rgba(30, 58, 138, 0.08)",
                                borderColor: "#1e3a8a",
                              },
                            }}
                          >
                            {land.actionLabel}
                          </Button>
                        </Box>
                      </Stack>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Box>
      </motion.section>
    </Box>
  );
}
