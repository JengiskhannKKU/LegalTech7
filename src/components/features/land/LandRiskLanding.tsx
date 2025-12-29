"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Avatar,
  Box,
  Button,
  Chip,
  Divider,
  Grid,
  LinearProgress,
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
  MapOutlined,
  NotificationsActiveOutlined,
  SatelliteAltOutlined,
  SendRounded,
  ShieldOutlined,
  SupportAgentOutlined,
  TrackChangesOutlined,
  WarningAmberOutlined,
} from "@mui/icons-material";

const navItems = [
  { label: "ภาพรวม", icon: <DashboardOutlined fontSize="small" />, href: "/dashboard" },
  { label: "ที่ดินของฉัน", icon: <HomeWorkOutlined fontSize="small" />, href: "/dashboard/lands" },
  { label: "แพ็กเกจบริการ", icon: <Inventory2Outlined fontSize="small" />, href: "/dashboard/packages" },
  { label: "เอกสารกฎหมาย", icon: <DescriptionOutlined fontSize="small" />, href: "/dashboard/documents" },
  { label: "ปรึกษาทนาย", icon: <SupportAgentOutlined fontSize="small" />, href: "/dashboard/consultation" },
  { label: "ประกันภัยที่ดิน", icon: <ShieldOutlined fontSize="small" />, href: "/dashboard/insurance" },
];

const detailItems = [
  {
    label: "พิกัด (Coordinates)",
    value: "18.7912° N, 98.9654° E",
    color: "#0e7490",
  },
  {
    label: "แหล่งภาพ (Source)",
    value: "Sentinel-2B (ESA)",
  },
  {
    label: "ความละเอียด (GSD)",
    value: "10 เมตร/พิกเซล",
  },
  {
    label: "วันที่บันทึก (Acquired)",
    value: "30 ธ.ค. 2025, 10:15 น.",
  },
  {
    label: "ความเชื่อมั่น AI (AI Confidence)",
    value: "92.5% (สูง)",
    color: "#dc2626",
  },
  {
    label: "ขนาดวัตถุต้องสงสัย",
    value: "~16 ตร.ม. (สิ่งปลูกสร้าง)",
  },
];

const riskScores = [
  {
    label: "เสี่ยงครอบครองปรปักษ์",
    value: 75,
    level: "สูง",
    color: "#dc2626",
  },
  {
    label: "เสี่ยงการรุกล้ำ",
    value: 38,
    level: "เฝ้าระวัง",
    color: "#f97316",
  },
  {
    label: "เสี่ยงปัญหามรดก",
    value: 10,
    level: "ต่ำ",
    color: "#16a34a",
  },
];

const insightItems = [
  "แนะนำตรวจพื้นที่ภายใน 48 ชั่วโมง",
  "พบแนวรั้วเปลี่ยนตำแหน่ง 2.1 เมตร",
  "อัปเดตแผนที่ฉบับล่าสุดเมื่อ 2 ชั่วโมงก่อน",
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

export default function LandRiskLanding() {
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
                <Box sx={{ px: 3, pb: 3 }}>
                  <Paper
                    elevation={0}
                    sx={{
                      borderRadius: 3,
                      p: 2,
                      backgroundColor: "rgba(15, 23, 42, 0.6)",
                      border: "1px solid rgba(148, 163, 184, 0.18)",
                    }}
                  >
                    <Stack spacing={1}>
                      <Chip
                        label="เฝ้าระวังสด"
                        size="small"
                        sx={{
                          alignSelf: "flex-start",
                          backgroundColor: "rgba(34, 211, 238, 0.18)",
                          color: "#67e8f9",
                          fontWeight: 600,
                        }}
                      />
                      <Typography variant="body2" sx={{ fontWeight: 600, color: "rgba(226,232,240,0.7)" }}>
                        ระบบกำลังเฝ้าระวังแบบเรียลไทม์
                      </Typography>
                      <Typography variant="caption" sx={{ color: "rgba(226,232,240,0.7)" }}>
                        อัปเดตล่าสุดเมื่อ 2 นาทีที่แล้ว
                      </Typography>
                    </Stack>
                  </Paper>
                </Box>
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
                    ภาพรวม (Dashboard)
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    ศูนย์ควบคุมความเสี่ยงที่ดินเชิงป้องกัน พร้อมการเฝ้าระวังและการตอบสนองทันที
                  </Typography>
                </Box>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Chip
                    icon={<NotificationsActiveOutlined />}
                    label="สด"
                    sx={{
                      backgroundColor: "rgba(14, 116, 144, 0.12)",
                      color: "#0e7490",
                      fontWeight: 600,
                    }}
                  />
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
              </Stack>
            </motion.div>

            <Grid container spacing={3}>
              <Grid size={{ xs: 12, lg: 8 }}>
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
                      <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Stack direction="row" spacing={1.5} alignItems="center">
                          <Avatar
                            sx={{
                              width: 40,
                              height: 40,
                              backgroundColor: "rgba(14, 116, 144, 0.12)",
                              color: "#0e7490",
                            }}
                          >
                            <SatelliteAltOutlined fontSize="small" />
                          </Avatar>
                          <Box>
                            <Typography variant="h6" sx={{ fontWeight: 700 }}>
                              การเฝ้าระวัง (Live Monitor)
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                              ภาพถ่ายดาวเทียม + การตรวจสอบภาคสนามแบบต่อเนื่อง
                            </Typography>
                          </Box>
                        </Stack>
                        <Chip
                          label="พบสิ่งผิดปกติ"
                          size="small"
                          sx={{
                            backgroundColor: "rgba(220, 38, 38, 0.12)",
                            color: "#dc2626",
                            fontWeight: 600,
                          }}
                        />
                      </Stack>

                      <Box
                        sx={(theme) => ({
                          position: "relative",
                          height: { xs: 260, md: 320 },
                          borderRadius: 3,
                          overflow: "hidden",
                          border: `1px solid ${theme.palette.divider}`,
                          backgroundColor: "#f8fafc",
                          backgroundImage:
                            "radial-gradient(circle at 1px 1px, rgba(15, 23, 42, 0.15) 1px, transparent 0)",
                          backgroundSize: "24px 24px",
                        })}
                      >
                        <Typography
                          variant="h6"
                          sx={{
                            position: "absolute",
                            inset: 0,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "rgba(15, 23, 42, 0.16)",
                            letterSpacing: "0.18em",
                            textTransform: "uppercase",
                            fontWeight: 700,
                          }}
                        >
                          ภาพถ่ายดาวเทียม Sentinel-2
                        </Typography>
                        <Box
                          sx={{
                            position: "absolute",
                            left: "52%",
                            top: "48%",
                            transform: "translate(-50%, -50%)",
                            width: { xs: 120, md: 150 },
                            height: { xs: 80, md: 110 },
                            borderRadius: 2,
                            border: "2px solid #ef4444",
                            boxShadow: "0 12px 24px rgba(239, 68, 68, 0.2)",
                          }}
                        >
                          <Box
                            sx={{
                              position: "absolute",
                              top: -18,
                              left: -2,
                              backgroundColor: "#ef4444",
                              color: "#f8fafc",
                              fontSize: 12,
                              fontWeight: 700,
                              px: 1,
                              py: 0.2,
                              borderRadius: 1,
                            }}
                          >
                            AI ตรวจพบ 92%
                          </Box>
                        </Box>
                        <Box
                          sx={{
                            position: "absolute",
                            left: "52%",
                            top: "48%",
                            transform: "translate(-50%, -50%)",
                            width: 180,
                            height: 180,
                            borderRadius: "50%",
                            border: "1px solid rgba(239, 68, 68, 0.35)",
                            animation: "pulse 2.6s ease-out infinite",
                            "@keyframes pulse": {
                              "0%": { transform: "translate(-50%, -50%) scale(0.7)", opacity: 0.6 },
                              "70%": { transform: "translate(-50%, -50%) scale(1)", opacity: 0 },
                              "100%": { opacity: 0 },
                            },
                          }}
                        />
                        <Chip
                          icon={<TrackChangesOutlined />}
                          label="โซน 12B"
                          size="small"
                          sx={{
                            position: "absolute",
                            left: 16,
                            top: 16,
                            backgroundColor: "rgba(15, 23, 42, 0.08)",
                            color: "#0f172a",
                            fontWeight: 600,
                          }}
                        />
                      </Box>

                      <Grid container spacing={2}>
                        {detailItems.map((item) => (
                          <Grid key={item.label} size={{ xs: 12, sm: 6, md: 4 }}>
                            <Stack spacing={0.5}>
                              <Typography variant="caption" color="text.secondary">
                                {item.label}
                              </Typography>
                              <Typography
                                variant="subtitle2"
                                sx={{ fontWeight: 600, color: item.color ?? "#0f172a" }}
                              >
                                {item.value}
                              </Typography>
                            </Stack>
                          </Grid>
                        ))}
                      </Grid>

                      <Box
                        sx={{
                          borderRadius: 2,
                          p: 2,
                          backgroundColor: "rgba(251, 191, 36, 0.14)",
                          border: "1px solid rgba(251, 191, 36, 0.4)",
                          display: "flex",
                          gap: 1.5,
                          alignItems: "flex-start",
                        }}
                      >
                        <WarningAmberOutlined sx={{ color: "#d97706", mt: 0.2 }} />
                        <Typography variant="body2" sx={{ color: "#92400e" }}>
                          การวิเคราะห์: ระบบพบการเปลี่ยนแปลงของค่าดัชนีพืชพรรณ (NDVI)
                          ลดลงอย่างฉับพลัน และพบรูปทรงสี่เหลี่ยมคล้ายสิ่งปลูกสร้างใหม่
                        </Typography>
                      </Box>
                    </Stack>
                  </Paper>
                </motion.div>
              </Grid>

              <Grid size={{ xs: 12, lg: 4 }}>
                <motion.div variants={fadeUp}>
                  <Paper
                    elevation={0}
                    sx={(theme) => ({
                      borderRadius: 4,
                      border: `1px solid ${theme.palette.divider}`,
                      backgroundColor: "#ffffff",
                      p: { xs: 2.5, md: 3 },
                      height: "100%",
                    })}
                  >
                    <Stack spacing={2.5} height="100%">
                      <Stack direction="row" spacing={1.5} alignItems="center">
                        <Avatar
                          sx={{
                            width: 40,
                            height: 40,
                            backgroundColor: "rgba(15, 23, 42, 0.08)",
                            color: "#0f172a",
                          }}
                        >
                          <MapOutlined fontSize="small" />
                        </Avatar>
                        <Box>
                          <Typography variant="h6" sx={{ fontWeight: 700 }}>
                            ระดับความเสี่ยง (Risk Score)
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            สรุปความเสี่ยงจากการเฝ้าระวังล่าสุด
                          </Typography>
                        </Box>
                      </Stack>

                      <Stack spacing={2}>
                        {riskScores.map((item) => (
                          <Box key={item.label}>
                            <Stack direction="row" justifyContent="space-between" spacing={2}>
                              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                                {item.label}
                              </Typography>
                              <Typography
                                variant="body2"
                                sx={{ fontWeight: 700, color: item.color }}
                              >
                                {item.level} ({item.value}%)
                              </Typography>
                            </Stack>
                            <LinearProgress
                              variant="determinate"
                              value={item.value}
                              sx={{
                                mt: 1,
                                height: 8,
                                borderRadius: 999,
                                backgroundColor: "rgba(15, 23, 42, 0.08)",
                                "& .MuiLinearProgress-bar": {
                                  backgroundColor: item.color,
                                },
                              }}
                            />
                          </Box>
                        ))}
                      </Stack>

                      <Divider />

                      <Stack spacing={1.5}>
                        <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                          ข้อเสนอแนะด่วน
                        </Typography>
                        <Stack spacing={1.2}>
                          {insightItems.map((item) => (
                            <Stack
                              direction="row"
                              spacing={1}
                              key={item}
                              alignItems="flex-start"
                            >
                              <Box
                                sx={{
                                  width: 8,
                                  height: 8,
                                  borderRadius: "50%",
                                  backgroundColor: "#0e7490",
                                  mt: 0.8,
                                }}
                              />
                              <Typography variant="body2" color="text.secondary">
                                {item}
                              </Typography>
                            </Stack>
                          ))}
                        </Stack>
                      </Stack>

                      <Box sx={{ mt: "auto" }}>
                      <Button
                        variant="contained"
                        fullWidth
                        endIcon={<SendRounded />}
                        component={Link}
                        href="/dashboard/response"
                        sx={{
                          backgroundColor: "#f97316",
                          color: "#fff7ed",
                            fontWeight: 700,
                            py: 1.2,
                            boxShadow: "0 12px 24px rgba(249, 115, 22, 0.3)",
                            "&:hover": { backgroundColor: "#ea580c" },
                          }}
                        >
                          ส่งเจ้าหน้าที่ตรวจสอบ
                        </Button>
                      </Box>
                    </Stack>
                  </Paper>
                </motion.div>
              </Grid>
            </Grid>
          </Stack>
        </Box>
      </motion.section>
    </Box>
  );
}
