"use client";

import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export default function VolumeAreaChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
        <defs>
          <linearGradient id="submittedFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#0f6e3d" stopOpacity={0.35} />
            <stop offset="95%" stopColor="#0f6e3d" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="approvedFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#2f8fd6" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#2f8fd6" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--hvc-border)" />
        <XAxis dataKey="day" tickLine={false} axisLine={false} fontSize={12} />
        <YAxis tickLine={false} axisLine={false} fontSize={12} width={30} />
        <Tooltip />
        <Area type="monotone" dataKey="submitted" stroke="#0f6e3d" fill="url(#submittedFill)" strokeWidth={2} name="Submitted" />
        <Area type="monotone" dataKey="approved" stroke="#2f8fd6" fill="url(#approvedFill)" strokeWidth={2} name="Approved" />
      </AreaChart>
    </ResponsiveContainer>
  );
}
