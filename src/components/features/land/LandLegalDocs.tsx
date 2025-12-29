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
  AssignmentTurnedInOutlined,
  DescriptionOutlined,
  DownloadOutlined,
  GavelOutlined,
  HomeWorkOutlined,
  Inventory2Outlined,
  ShieldOutlined,
  SupportAgentOutlined,
  DashboardOutlined,
  ReceiptLongOutlined,
} from "@mui/icons-material";

const navItems = [
  { label: "ภาพรวม", icon: <DashboardOutlined fontSize="small" />, href: "/dashboard" },
  { label: "ที่ดินของฉัน", icon: <HomeWorkOutlined fontSize="small" />, href: "/dashboard/lands" },
  { label: "แพ็กเกจบริการ", icon: <Inventory2Outlined fontSize="small" />, href: "/dashboard/packages" },
  { label: "เอกสารกฎหมาย", icon: <DescriptionOutlined fontSize="small" />, href: "/dashboard/documents" },
  { label: "ปรึกษาทนาย", icon: <SupportAgentOutlined fontSize="small" />, href: "/dashboard/consultation" },
  { label: "ประกันภัยที่ดิน", icon: <ShieldOutlined fontSize="small" />, href: "/dashboard/insurance" },
];

const generatorCards = [
  {
    title: "หนังสือแจ้งเตือน",
    subtitle: "Notice",
    icon: <DescriptionOutlined fontSize="small" />,
    tone: { background: "rgba(37, 99, 235, 0.08)", color: "#1d4ed8" },
  },
  {
    title: "หนังสือคัดค้านการครอบครอง",
    subtitle: "Objection",
    icon: <GavelOutlined fontSize="small" />,
    tone: { background: "rgba(14, 116, 144, 0.12)", color: "#0e7490" },
  },
  {
    title: "สัญญาเช่าที่ดิน (มาตรฐาน)",
    subtitle: "Standard Lease",
    icon: <ReceiptLongOutlined fontSize="small" />,
    tone: { background: "rgba(234, 88, 12, 0.12)", color: "#c2410c" },
  },
];

const historyItems = [
  {
    title: "หนังสือแจ้งเตือนผู้บุกรุก (แปลง #8821)",
    subtitle: "สร้างเมื่อ: 30 ธ.ค. 2024",
    status: "พร้อมดาวน์โหลด",
  },
  {
    title: "หนังสือคัดค้านการครอบครอง (แปลง #1044)",
    subtitle: "สร้างเมื่อ: 18 พ.ย. 2024",
    status: "พร้อมดาวน์โหลด",
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

export default function LandLegalDocs() {
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
                    คลังเอกสารกฎหมาย (Legal Docs)
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    สร้างเอกสารอัตโนมัติ จัดเก็บ และดาวน์โหลดได้ในที่เดียว
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

            <motion.div variants={fadeUp}>
              <Paper
                elevation={0}
                sx={(theme) => ({
                  borderRadius: 4,
                  border: `1px solid ${theme.palette.divider}`,
                  backgroundColor: "#ffffff",
                  p: { xs: 2.5, md: 3 },
                })}
              >
                <Stack spacing={2.5}>
                  <Stack direction="row" spacing={1.5} alignItems="center">
                    <Avatar
                      sx={{
                        width: 40,
                        height: 40,
                        backgroundColor: "rgba(30, 64, 175, 0.12)",
                        color: "#1d4ed8",
                      }}
                    >
                      <AssignmentTurnedInOutlined fontSize="small" />
                    </Avatar>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 700 }}>
                        สร้างเอกสารอัตโนมัติ (Generator)
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        เลือกประเภทเอกสาร ระบบจะดึงข้อมูลที่ดินมาเติมให้อัตโนมัติ
                      </Typography>
                    </Box>
                  </Stack>

                  <Grid container spacing={2.5}>
                    {generatorCards.map((card) => (
                      <Grid key={card.title} size={{ xs: 12, md: 4 }}>
                        <Paper
                          elevation={0}
                          sx={(theme) => ({
                            borderRadius: 3,
                            border: `1px solid ${theme.palette.divider}`,
                            backgroundColor: "#ffffff",
                            p: 2.5,
                            height: "100%",
                            transition: "all 0.2s ease",
                            "&:hover": {
                              borderColor: "rgba(30, 64, 175, 0.4)",
                              boxShadow: "0 12px 24px rgba(15, 23, 42, 0.08)",
                            },
                          })}
                        >
                          <Stack spacing={2} alignItems="center" textAlign="center">
                            <Avatar
                              sx={{
                                width: 48,
                                height: 48,
                                backgroundColor: card.tone.background,
                                color: card.tone.color,
                              }}
                            >
                              {card.icon}
                            </Avatar>
                            <Box>
                              <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                                {card.title}
                              </Typography>
                              <Typography variant="caption" color="text.secondary">
                                {card.subtitle}
                              </Typography>
                            </Box>
                            <Button
                              variant="outlined"
                              fullWidth
                              sx={{
                                borderColor: card.tone.color,
                                color: card.tone.color,
                                "&:hover": {
                                  borderColor: card.tone.color,
                                  backgroundColor: card.tone.background,
                                },
                              }}
                            >
                              เลือกเอกสารนี้
                            </Button>
                          </Stack>
                        </Paper>
                      </Grid>
                    ))}
                  </Grid>
                </Stack>
              </Paper>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Paper
                elevation={0}
                sx={(theme) => ({
                  borderRadius: 4,
                  border: `1px solid ${theme.palette.divider}`,
                  backgroundColor: "#ffffff",
                  p: { xs: 2.5, md: 3 },
                })}
              >
                <Stack spacing={2}>
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    ประวัติเอกสารของคุณ
                  </Typography>
                  <Stack spacing={2}>
                    {historyItems.map((item) => (
                      <Paper
                        key={item.title}
                        elevation={0}
                        sx={(theme) => ({
                          borderRadius: 3,
                          border: `1px solid ${theme.palette.divider}`,
                          backgroundColor: "#f8fafc",
                          px: 2.5,
                          py: 2,
                        })}
                      >
                        <Stack
                          direction={{ xs: "column", md: "row" }}
                          justifyContent="space-between"
                          alignItems={{ md: "center" }}
                          spacing={2}
                        >
                          <Stack direction="row" spacing={1.5} alignItems="center">
                            <Avatar
                              sx={{
                                width: 40,
                                height: 40,
                                backgroundColor: "rgba(239, 68, 68, 0.12)",
                                color: "#dc2626",
                              }}
                            >
                              PDF
                            </Avatar>
                            <Box>
                              <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                                {item.title}
                              </Typography>
                              <Typography variant="caption" color="text.secondary">
                                {item.subtitle}
                              </Typography>
                            </Box>
                          </Stack>
                          <Stack direction="row" spacing={2} alignItems="center">
                            <Chip
                              label={item.status}
                              size="small"
                              sx={{
                                backgroundColor: "rgba(16, 185, 129, 0.12)",
                                color: "#059669",
                                fontWeight: 600,
                              }}
                            />
                            <Button
                              variant="contained"
                              startIcon={<DownloadOutlined />}
                              sx={{
                                backgroundColor: "#f97316",
                                color: "#fff7ed",
                                "&:hover": { backgroundColor: "#ea580c" },
                              }}
                            >
                              ดาวน์โหลด
                            </Button>
                          </Stack>
                        </Stack>
                      </Paper>
                    ))}
                  </Stack>
                </Stack>
              </Paper>
            </motion.div>
          </Stack>
        </Box>
      </motion.section>
    </Box>
  );
}
