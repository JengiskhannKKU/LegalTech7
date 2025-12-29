"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Avatar,
  Box,
  Button,
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
  CheckCircleOutline,
  CloseRounded,
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

const plans = [
  {
    id: "starter",
    name: "เริ่มต้น (Starter)",
    price: "ฟรี",
    priceNote: "ตลอดชีพ",
    highlight: false,
    buttonLabel: "ใช้งานปัจจุบัน",
    buttonVariant: "outlined" as const,
    buttonHref: "/dashboard/lands",
    features: [
      { label: "ระบบจัดการข้อมูลที่ดิน", available: true },
      { label: "สร้างเอกสารกฎหมายพื้นฐาน", available: true },
      { label: "ดูภาพดาวเทียม (ไม่อัปเดต)", available: true },
      { label: "แจ้งเตือนการรุกล้ำอัตโนมัติ", available: false },
      { label: "บริการเจ้าหน้าที่ลงพื้นที่", available: false },
    ],
  },
  {
    id: "standard",
    name: "มาตรฐาน (Standard)",
    price: "฿199",
    priceNote: "/แปลง/เดือน",
    highlight: true,
    buttonLabel: "สมัครแพ็กเกจนี้",
    buttonVariant: "contained" as const,
    buttonHref: "/dashboard/response",
    features: [
      { label: "ระบบ AI ตรวจจับการบุกรุก", available: true },
      { label: "ภาพดาวเทียมอัปเดตรายเดือน", available: true },
      { label: "แจ้งเตือนผ่าน Line/SMS", available: true },
      { label: "รายงานความเสี่ยงรายเดือน", available: true },
      { label: "ประกันภัยข้อพิพาท", available: false },
    ],
  },
  {
    id: "premium",
    name: "พรีเมียม (Premium)",
    price: "฿499",
    priceNote: "/แปลง/เดือน",
    highlight: false,
    buttonLabel: "สมัครแพ็กเกจนี้",
    buttonVariant: "outlined" as const,
    buttonHref: "/dashboard/consultation",
    features: [
      { label: "ระบบ AI ตรวจจับความละเอียดสูง", available: true },
      { label: "ภาพดาวเทียมอัปเดตรายสัปดาห์", available: true },
      { label: "ส่งเจ้าหน้าที่ตรวจสอบฟรี 1 ครั้ง/ปี", available: true },
      { label: "ปรึกษาทนายความส่วนตัว 24 ชม.", available: true },
      { label: "รวมประกันภัยข้อพิพาท 5 แสนบาท", available: true },
    ],
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

export default function LandPackages() {
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
                    แพ็กเกจบริการ (Subscription)
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    เลือกแพ็กเกจที่เหมาะกับความเสี่ยงและระดับการเฝ้าระวังของคุณ
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
              <Stack spacing={1} alignItems="center" textAlign="center">
                <Typography variant="h5" sx={{ fontWeight: 700, color: "#0f172a" }}>
                  เลือกแพ็กเกจดูแลที่ดินของคุณ
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ป้องกันข้อพิพาท เลือกแผนที่เหมาะสมเพื่อความอุ่นใจตลอด 24 ชม.
                </Typography>
              </Stack>
            </motion.div>

            <Grid container spacing={3} alignItems="stretch">
              {plans.map((plan) => (
                <Grid key={plan.id} size={{ xs: 12, md: 4 }}>
                  <motion.div variants={fadeUp}>
                    <Paper
                      elevation={0}
                      sx={(theme) => ({
                        position: "relative",
                        borderRadius: 4,
                        border: plan.highlight
                          ? "2px solid #fb923c"
                          : `1px solid ${theme.palette.divider}`,
                        backgroundColor: plan.highlight ? "#fff7ed" : "#ffffff",
                        p: 3,
                        height: "100%",
                        boxShadow: plan.highlight
                          ? "0 16px 32px rgba(249, 115, 22, 0.18)"
                          : "0 12px 24px rgba(15, 23, 42, 0.06)",
                      })}
                    >
                      {plan.highlight && (
                        <Box
                          sx={{
                            position: "absolute",
                            top: 0,
                            right: 0,
                            backgroundColor: "#f97316",
                            color: "#fff7ed",
                            px: 2,
                            py: 0.6,
                            borderBottomLeftRadius: 12,
                            fontSize: 12,
                            fontWeight: 700,
                          }}
                        >
                          แนะนำ
                        </Box>
                      )}
                      <Stack spacing={2} height="100%">
                        <Box>
                          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                            {plan.name}
                          </Typography>
                          <Stack direction="row" alignItems="baseline" spacing={1} sx={{ mt: 1 }}>
                            <Typography
                              variant="h4"
                              sx={{ fontWeight: 700, color: plan.highlight ? "#c2410c" : "#0f172a" }}
                            >
                              {plan.price}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {plan.priceNote}
                            </Typography>
                          </Stack>
                        </Box>

                        <Stack spacing={1.3}>
                          {plan.features.map((feature) => (
                            <Stack key={feature.label} direction="row" spacing={1.2} alignItems="center">
                              {feature.available ? (
                                <CheckCircleOutline sx={{ color: "#16a34a", fontSize: 18 }} />
                              ) : (
                                <CloseRounded sx={{ color: "#cbd5e1", fontSize: 18 }} />
                              )}
                              <Typography
                                variant="body2"
                                sx={{
                                  color: feature.available ? "#334155" : "#94a3b8",
                                  textDecoration: feature.available ? "none" : "line-through",
                                }}
                              >
                                {feature.label}
                              </Typography>
                            </Stack>
                          ))}
                        </Stack>

                        <Box sx={{ mt: "auto" }}>
                          <Button
                            component={Link}
                            href={plan.buttonHref}
                            fullWidth
                            variant={plan.buttonVariant}
                            sx={{
                              py: 1.1,
                              borderColor: plan.highlight ? "#f97316" : "#1e3a8a",
                              color:
                                plan.buttonVariant === "outlined"
                                  ? plan.highlight
                                    ? "#ea580c"
                                    : "#1e3a8a"
                                  : "#fff7ed",
                              backgroundColor:
                                plan.buttonVariant === "contained" ? "#f97316" : "transparent",
                              "&:hover": {
                                backgroundColor:
                                  plan.buttonVariant === "contained" ? "#ea580c" : "rgba(30, 58, 138, 0.08)",
                                borderColor: plan.highlight ? "#f97316" : "#1e3a8a",
                              },
                            }}
                          >
                            {plan.buttonLabel}
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
