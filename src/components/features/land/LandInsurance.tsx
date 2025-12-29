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
  HealthAndSafetyOutlined,
  HomeWorkOutlined,
  Inventory2Outlined,
  PolicyOutlined,
  ShieldOutlined,
  SupportAgentOutlined,
  VerifiedOutlined,
} from "@mui/icons-material";

const navItems = [
  { label: "ภาพรวม", icon: <DashboardOutlined fontSize="small" />, href: "/dashboard" },
  { label: "ที่ดินของฉัน", icon: <HomeWorkOutlined fontSize="small" />, href: "/dashboard/lands" },
  { label: "แพ็กเกจบริการ", icon: <Inventory2Outlined fontSize="small" />, href: "/dashboard/packages" },
  { label: "เอกสารกฎหมาย", icon: <DescriptionOutlined fontSize="small" />, href: "/dashboard/documents" },
  { label: "ปรึกษาทนาย", icon: <SupportAgentOutlined fontSize="small" />, href: "/dashboard/consultation" },
  { label: "ประกันภัยที่ดิน", icon: <ShieldOutlined fontSize="small" />, href: "/dashboard/insurance" },
];

const coverageStats = [
  { label: "วงเงินคุ้มครอง", value: "500,000 บาท" },
  { label: "คุ้มครองแปลง", value: "2 แปลง" },
  { label: "ต่ออายุถัดไป", value: "31 ธ.ค. 2025" },
];

const coverageItems = [
  "ค่าทนายและค่าใช้จ่ายในชั้นศาล",
  "ค่ารังวัดและการตรวจสอบภาคสนาม",
  "ค่าดำเนินการออกหนังสือแจ้ง",
  "บริการตอบสนองภายใน 48 ชั่วโมง",
];

const claimSteps = [
  {
    title: "แจ้งเหตุ",
    detail: "กรอกเหตุการณ์และแนบหลักฐาน",
  },
  {
    title: "ตรวจสอบ",
    detail: "ทีมกฎหมายประเมินวงเงินคุ้มครอง",
  },
  {
    title: "อนุมัติ",
    detail: "ออกหนังสือยืนยันสิทธิ์คุ้มครอง",
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

export default function LandInsurance() {
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
                    ข้อมูลประกันภัย (Insurance)
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    ติดตามกรมธรรม์และสิทธิประโยชน์การคุ้มครองที่ดินของคุณ
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
                sx={{
                  borderRadius: 4,
                  p: { xs: 3, md: 4 },
                  background:
                    "linear-gradient(135deg, rgba(15, 23, 42, 1) 0%, rgba(30, 64, 175, 1) 60%, rgba(14, 116, 144, 1) 100%)",
                  color: "#f8fafc",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: -40,
                    right: -30,
                    width: 120,
                    height: 120,
                    borderRadius: "50%",
                    background: "rgba(255, 255, 255, 0.12)",
                  }}
                />
                <Stack spacing={2} sx={{ position: "relative" }}>
                  <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Stack direction="row" spacing={1.5} alignItems="center">
                      <Avatar
                        sx={{
                          width: 48,
                          height: 48,
                          backgroundColor: "rgba(248, 250, 252, 0.2)",
                          color: "#f8fafc",
                        }}
                      >
                        <PolicyOutlined fontSize="small" />
                      </Avatar>
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 700 }}>
                          Land Protection+
                        </Typography>
                        <Typography variant="body2" sx={{ color: "rgba(248, 250, 252, 0.7)" }}>
                          กรมธรรม์ประกันภัยข้อพิพาทที่ดิน
                        </Typography>
                      </Box>
                    </Stack>
                    <VerifiedOutlined sx={{ color: "rgba(248, 250, 252, 0.7)" }} />
                  </Stack>

                  <Grid container spacing={2}>
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                      <Typography variant="caption" sx={{ color: "rgba(248, 250, 252, 0.7)" }}>
                        เลขที่กรมธรรม์
                      </Typography>
                      <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                        POL-8821-TH
                      </Typography>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                      <Typography variant="caption" sx={{ color: "rgba(248, 250, 252, 0.7)" }}>
                        สถานะ
                      </Typography>
                      <Typography variant="subtitle1" sx={{ fontWeight: 700, color: "#a7f3d0" }}>
                        คุ้มครองอยู่
                      </Typography>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                      <Typography variant="caption" sx={{ color: "rgba(248, 250, 252, 0.7)" }}>
                        เริ่มคุ้มครอง
                      </Typography>
                      <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                        1 ม.ค. 2025
                      </Typography>
                    </Grid>
                  </Grid>
                </Stack>
              </Paper>
            </motion.div>

            <Grid container spacing={3}>
              <Grid size={{ xs: 12, lg: 7 }}>
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
                            backgroundColor: "rgba(16, 185, 129, 0.12)",
                            color: "#059669",
                          }}
                        >
                          <HealthAndSafetyOutlined fontSize="small" />
                        </Avatar>
                        <Box>
                          <Typography variant="h6" sx={{ fontWeight: 700 }}>
                            รายละเอียดความคุ้มครอง
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            รวมสิทธิประโยชน์และบริการที่ได้รับในแพ็กเกจนี้
                          </Typography>
                        </Box>
                      </Stack>

                      <Grid container spacing={2}>
                        {coverageStats.map((stat) => (
                          <Grid key={stat.label} size={{ xs: 12, md: 4 }}>
                            <Paper
                              elevation={0}
                              sx={{
                                borderRadius: 3,
                                border: "1px solid rgba(148, 163, 184, 0.25)",
                                p: 2,
                              }}
                            >
                              <Typography variant="caption" color="text.secondary">
                                {stat.label}
                              </Typography>
                              <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                                {stat.value}
                              </Typography>
                            </Paper>
                          </Grid>
                        ))}
                      </Grid>

                      <Stack spacing={1.5}>
                        {coverageItems.map((item) => (
                          <Stack key={item} direction="row" spacing={1.5} alignItems="flex-start">
                            <Chip
                              label="คุ้มครอง"
                              size="small"
                              sx={{
                                backgroundColor: "rgba(16, 185, 129, 0.12)",
                                color: "#059669",
                                fontWeight: 600,
                              }}
                            />
                            <Typography variant="body2" color="text.secondary">
                              {item}
                            </Typography>
                          </Stack>
                        ))}
                      </Stack>

                      <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
                        <Button
                          variant="contained"
                          sx={{
                            backgroundColor: "#0f172a",
                            "&:hover": { backgroundColor: "#1e293b" },
                          }}
                        >
                          ดาวน์โหลดกรมธรรม์
                        </Button>
                        <Button variant="outlined" sx={{ borderColor: "#0f172a", color: "#0f172a" }}>
                          ต่ออายุแพ็กเกจ
                        </Button>
                      </Stack>
                    </Stack>
                  </Paper>
                </motion.div>
              </Grid>

              <Grid size={{ xs: 12, lg: 5 }}>
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
                      <Typography variant="h6" sx={{ fontWeight: 700 }}>
                        ขั้นตอนการแจ้งเคลม
                      </Typography>
                      <Stack spacing={2}>
                        {claimSteps.map((step, index) => (
                          <Stack key={step.title} direction="row" spacing={1.5} alignItems="flex-start">
                            <Box
                              sx={{
                                width: 28,
                                height: 28,
                                borderRadius: "50%",
                                backgroundColor: "rgba(30, 64, 175, 0.12)",
                                color: "#1d4ed8",
                                fontWeight: 700,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: 13,
                              }}
                            >
                              {index + 1}
                            </Box>
                            <Box>
                              <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                                {step.title}
                              </Typography>
                              <Typography variant="caption" color="text.secondary">
                                {step.detail}
                              </Typography>
                            </Box>
                          </Stack>
                        ))}
                      </Stack>
                      <Box
                        sx={{
                          borderRadius: 3,
                          p: 2,
                          backgroundColor: "rgba(250, 204, 21, 0.16)",
                          border: "1px solid rgba(250, 204, 21, 0.4)",
                        }}
                      >
                        <Typography variant="body2" sx={{ fontWeight: 700, color: "#92400e" }}>
                          ต้องการแจ้งเคลมทันที?
                        </Typography>
                        <Typography variant="caption" sx={{ color: "#b45309" }}>
                          ส่งรายละเอียดเหตุการณ์เพื่อให้ทีมประกันตรวจสอบภายใน 24 ชม.
                        </Typography>
                        <Button
                          variant="contained"
                          sx={{
                            mt: 1.5,
                            backgroundColor: "#f97316",
                            color: "#fff7ed",
                            "&:hover": { backgroundColor: "#ea580c" },
                          }}
                        >
                          แจ้งเคลมตอนนี้
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
