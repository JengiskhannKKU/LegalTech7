'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Card, { CardBody, CardHeader } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import Alert from '@/components/ui/Alert';
import Link from 'next/link';
import { Home, TrendingUp, AlertTriangle, FileText, MapPin, Plus, Eye, ArrowRight } from 'lucide-react';
import { mockLands, mockAlerts, mockUser } from '@/lib/mockData';

export default function DashboardPage() {
  const user = mockUser;
  const lands = mockLands;
  const recentAlerts = mockAlerts.slice(0, 2);
  const totalLands = lands.length;
  const landsWithAlerts = lands.filter(l => l.hasAlert).length;
  const highRiskLands = lands.filter(l => l.riskLevel === 'high').length;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Banner */}
        <div className="mb-8 bg-gradient-to-r from-navy to-navy-700 rounded-2xl p-8 text-white animate-fade-in">
          <h1 className="text-3xl font-bold mb-2 text-white">สวัสดี, {user.fullName}</h1>
          <p className="text-gray-200">ยินดีต้อนรับสู่ LandGuard Dashboard - จัดการที่ดินของคุณได้ง่ายๆ</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card hover={true} className="animate-fade-in">
            <CardBody>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-text-light text-sm mb-1">ที่ดินทั้งหมด</p>
                  <p className="text-3xl font-bold text-navy">{totalLands}</p>
                </div>
                <div className="w-12 h-12 bg-navy-100 rounded-lg flex items-center justify-center">
                  <Home className="w-6 h-6 text-navy" />
                </div>
              </div>
            </CardBody>
          </Card>

          <Card hover={true} className="animate-fade-in animation-delay-100">
            <CardBody>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-text-light text-sm mb-1">การแจ้งเตือนใหม่</p>
                  <p className="text-3xl font-bold text-gold">{landsWithAlerts}</p>
                </div>
                <div className="w-12 h-12 bg-gold-100 rounded-lg flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-gold" />
                </div>
              </div>
            </CardBody>
          </Card>

          <Card hover={true} className="animate-fade-in animation-delay-200">
            <CardBody>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-text-light text-sm mb-1">ความเสี่ยงสูง</p>
                  <p className="text-3xl font-bold text-red-600">{highRiskLands}</p>
                </div>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-red-600" />
                </div>
              </div>
            </CardBody>
          </Card>

          <Card hover={true} className="animate-fade-in animation-delay-300">
            <CardBody>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-text-light text-sm mb-1">เอกสารรอดำเนินการ</p>
                  <p className="text-3xl font-bold text-blue-600">2</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </CardBody>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Lands */}
          <div className="lg:col-span-2 space-y-6">
            {/* My Lands */}
            <Card className="animate-fade-in animation-delay-100">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold">ที่ดินของฉัน</h2>
                  <Link href="/my-lands">
                    <Button variant="ghost" size="sm">
                      ดูทั้งหมด
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </CardHeader>
              <CardBody className="space-y-4">
                {lands.map((land, index) => (
                  <div
                    key={land.id}
                    className="p-4 border border-gray-200 rounded-lg hover:border-navy hover:shadow-md transition-all cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-navy-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-5 h-5 text-navy" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-navy mb-1">
                            {land.deedType} {land.deedNumber}
                          </h3>
                          <p className="text-sm text-text-light">
                            {land.province} • {land.landSizeRai}-{land.landSizeNgan}-{land.landSizeWa}
                          </p>
                        </div>
                      </div>
                      <Badge
                        variant={
                          land.riskLevel === 'high'
                            ? 'critical'
                            : land.riskLevel === 'medium'
                              ? 'medium'
                              : 'low'
                        }
                      >
                        {land.riskLevel === 'high' ? 'เสี่ยงสูง' : land.riskLevel === 'medium' ? 'เสี่ยงปานกลาง' : 'เสี่ยงต่ำ'}
                      </Badge>
                    </div>

                    {land.hasAlert && (
                      <Alert type="warning" className="text-xs">
                        มีการแจ้งเตือนใหม่ - ตรวจพบการเปลี่ยนแปลงบนที่ดิน
                      </Alert>
                    )}

                    <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                      <span className="text-xs text-text-light">
                        ตรวจสอบล่าสุด: {new Date(land.lastInspection).toLocaleDateString('th-TH')}
                      </span>
                      <Link href={`/my-lands/${land.id}`}>
                        <Button variant="ghost" size="sm">
                          <Eye className="w-4 h-4" />
                          ดูรายละเอียด
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))}

                <Link href="/my-lands/add">
                  <button className="w-full p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-navy hover:bg-navy-50 transition-all group">
                    <div className="flex items-center justify-center gap-2 text-navy">
                      <Plus className="w-5 h-5" />
                      <span className="font-medium">เพิ่มที่ดินใหม่</span>
                    </div>
                  </button>
                </Link>
              </CardBody>
            </Card>
          </div>

          {/* Right Column - Alerts & Quick Actions */}
          <div className="space-y-6">
            {/* Recent Alerts */}
            <Card className="animate-fade-in animation-delay-200">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold">การแจ้งเตือนล่าสุด</h2>
                  <Link href="/alerts">
                    <Button variant="ghost" size="sm">
                      ดูทั้งหมด
                    </Button>
                  </Link>
                </div>
              </CardHeader>
              <CardBody className="space-y-4">
                {recentAlerts.map((alert) => (
                  <div key={alert.alertId} className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <div className="flex items-start gap-3 mb-2">
                      <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <Badge variant="critical" className="mb-2">
                          {alert.alertLevel === 'critical' ? 'วิกฤต' : 'สำคัญ'}
                        </Badge>
                        <p className="text-sm font-medium mb-1">{alert.description}</p>
                        <p className="text-xs text-text-light">
                          {new Date(alert.timestamp).toLocaleDateString('th-TH', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </p>
                      </div>
                    </div>
                    <Link href={`/alerts/${alert.alertId}`}>
                      <Button variant="danger" size="sm" className="w-full mt-2">
                        ดำเนินการ
                      </Button>
                    </Link>
                  </div>
                ))}
              </CardBody>
            </Card>

            {/* Quick Actions */}
            <Card className="animate-fade-in animation-delay-300">
              <CardHeader>
                <h2 className="text-xl font-semibold">การดำเนินการด่วน</h2>
              </CardHeader>
              <CardBody className="space-y-3">
                <Link href="/risk-assessment">
                  <Button variant="primary" className="w-full justify-start">
                    <TrendingUp className="w-5 h-5" />
                    ประเมินความเสี่ยง
                  </Button>
                </Link>
                <Link href="/documents/generate">
                  <Button variant="outline" className="w-full justify-start">
                    <FileText className="w-5 h-5" />
                    สร้างเอกสารทางกฎหมาย
                  </Button>
                </Link>
                <Link href="/legal-network">
                  <Button variant="outline" className="w-full justify-start">
                    <Home className="w-5 h-5" />
                    ค้นหาทนายความ
                  </Button>
                </Link>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
