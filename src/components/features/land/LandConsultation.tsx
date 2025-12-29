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
  TextField,
  Typography,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import {
  ChatBubbleOutline,
  CheckCircleOutline,
  DashboardOutlined,
  DescriptionOutlined,
  HomeWorkOutlined,
  Inventory2Outlined,
  ScheduleSendRounded,
  ShieldOutlined,
  SupportAgentOutlined,
  SendRounded,
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

const messages = [
  {
    id: "ai-1",
    role: "assistant",
    name: "LandGuard AI",
    text:
      "สวัสดีครับ ระบบ LandGuard พบความเสี่ยง ‘ครอบครองปรปักษ์’ ในแปลง #8821 ต้องการให้ช่วยร่างหนังสือเตือนหรือประสานทนายความไหมครับ?",
    time: "วันนี้ 10:05",
  },
  {
    id: "user-1",
    role: "user",
    name: "สมชาย",
    text: "ช่วยร่างหนังสือแจ้งเตือนก่อนครับ และช่วยเตรียมเอกสารสำหรับไกล่เกลี่ยไว้ด้วย",
    time: "วันนี้ 10:08",
  },
];

const statusSteps = [
  {
    title: "ตรวจสอบความเสี่ยง",
    detail: "AI ประเมินเสร็จสิ้น",
    status: "done",
  },
  {
    title: "การเจรจา/แจ้งเตือน",
    detail: "กำลังจัดทำหนังสือ",
    status: "active",
  },
  {
    title: "เตรียมไกล่เกลี่ย",
    detail: "รอเอกสารประกอบ",
    status: "pending",
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

export default function LandConsultation() {
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
                    ปรึกษาและไกล่เกลี่ย (Consultation)
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    ติดต่อผู้เชี่ยวชาญและจัดการกระบวนการก่อนฟ้องอย่างเป็นระบบ
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
              <Grid size={{ xs: 12, lg: 8 }}>
                <motion.div variants={fadeUp}>
                  <Paper
                    elevation={0}
                    sx={(theme) => ({
                      borderRadius: 4,
                      border: `1px solid ${theme.palette.divider}`,
                      backgroundColor: "#ffffff",
                      p: { xs: 2.5, md: 3 },
                      boxShadow: "0 12px 24px rgba(15, 23, 42, 0.06)",
                    })}
                  >
                    <Stack spacing={2.5}>
                      <Stack direction="row" spacing={1.5} alignItems="center">
                        <Avatar
                          sx={{
                            width: 40,
                            height: 40,
                            backgroundColor: "rgba(14, 116, 144, 0.12)",
                            color: "#0e7490",
                          }}
                        >
                          <ChatBubbleOutline fontSize="small" />
                        </Avatar>
                        <Box>
                          <Typography variant="h6" sx={{ fontWeight: 700 }}>
                            ห้องแชทกฎหมาย (Pre-litigation)
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            เจ้าหน้าที่และระบบช่วยร่างเอกสาร พร้อมแนะนำขั้นตอนการเจรจา
                          </Typography>
                        </Box>
                      </Stack>

                      <Paper
                        elevation={0}
                        sx={{
                          borderRadius: 3,
                          backgroundColor: "#f8fafc",
                          p: 2,
                          minHeight: 280,
                          display: "flex",
                          flexDirection: "column",
                          gap: 2,
                        }}
                      >
                        {messages.map((message) => {
                          const isUser = message.role === "user";
                          return (
                            <Stack
                              key={message.id}
                              spacing={0.5}
                              alignItems={isUser ? "flex-end" : "flex-start"}
                            >
                              <Paper
                                elevation={0}
                                sx={{
                                  p: 1.5,
                                  maxWidth: "80%",
                                  borderRadius: 2.5,
                                  backgroundColor: isUser
                                    ? "rgba(30, 64, 175, 0.12)"
                                    : "#ffffff",
                                  border: "1px solid rgba(148, 163, 184, 0.24)",
                                }}
                              >
                                <Typography variant="body2" sx={{ color: "#0f172a" }}>
                                  {message.text}
                                </Typography>
                              </Paper>
                              <Typography variant="caption" color="text.secondary">
                                {isUser ? "คุณ" : message.name} · {message.time}
                              </Typography>
                            </Stack>
                          );
                        })}
                      </Paper>

                      <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} alignItems="center">
                        <TextField
                          fullWidth
                          placeholder="พิมพ์ข้อความ..."
                          size="small"
                        />
                        <Button
                          variant="contained"
                          endIcon={<SendRounded />}
                          sx={{
                            backgroundColor: "#f97316",
                            color: "#fff7ed",
                            minWidth: { xs: "100%", sm: "160px" },
                            "&:hover": { backgroundColor: "#ea580c" },
                          }}
                        >
                          ส่งข้อความ
                        </Button>
                      </Stack>
                    </Stack>
                  </Paper>
                </motion.div>
              </Grid>

              <Grid size={{ xs: 12, lg: 4 }}>
                <motion.div variants={fadeUp}>
                  <Stack spacing={3}>
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
                          สถานะข้อพิพาท
                        </Typography>
                        <Stack spacing={2}>
                          {statusSteps.map((step) => {
                            const icon =
                              step.status === "done" ? (
                                <CheckCircleOutline sx={{ color: "#16a34a" }} />
                              ) : step.status === "active" ? (
                                <ScheduleSendRounded sx={{ color: "#f97316" }} />
                              ) : (
                                <WarningAmberOutlined sx={{ color: "#f59e0b" }} />
                              );

                            return (
                              <Stack key={step.title} direction="row" spacing={1.5} alignItems="flex-start">
                                {icon}
                                <Box>
                                  <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                                    {step.title}
                                  </Typography>
                                  <Typography variant="caption" color="text.secondary">
                                    {step.detail}
                                  </Typography>
                                </Box>
                              </Stack>
                            );
                          })}
                        </Stack>
                      </Stack>
                    </Paper>

                    <Paper
                      elevation={0}
                      sx={(theme) => ({
                        borderRadius: 4,
                        border: `1px solid ${theme.palette.divider}`,
                        backgroundColor: "#0f172a",
                        color: "#f8fafc",
                        p: { xs: 2.5, md: 3 },
                      })}
                    >
                      <Stack spacing={1.5}>
                        <Chip
                          label="เร่งด่วน"
                          size="small"
                          sx={{
                            alignSelf: "flex-start",
                            backgroundColor: "rgba(248, 113, 113, 0.2)",
                            color: "#fecaca",
                            fontWeight: 600,
                          }}
                        />
                        <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                          ต้องการคำปรึกษาทนายทันที?
                        </Typography>
                        <Typography variant="body2" sx={{ color: "rgba(248, 250, 252, 0.7)" }}>
                          เชื่อมต่อผู้เชี่ยวชาญและส่งเอกสารเบื้องต้นให้ตรวจสอบได้ทันที
                        </Typography>
                        <Button
                          variant="contained"
                          sx={{
                            mt: 1,
                            backgroundColor: "#38bdf8",
                            color: "#0f172a",
                            fontWeight: 700,
                            "&:hover": { backgroundColor: "#22d3ee" },
                          }}
                        >
                          นัดหมายทนายความ
                        </Button>
                      </Stack>
                    </Paper>
                  </Stack>
                </motion.div>
              </Grid>
            </Grid>
          </Stack>
        </Box>
      </motion.section>
    </Box>
  );
}
