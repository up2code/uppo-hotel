import { AdminLayout } from "@/components/layouts/admin-layout";
import { ChatbotSetupForm } from "@/features/chatbot/components/chatbot-setup-form";
import React from "react";

const Index = () => {
  return (
    <AdminLayout pathname="/admin/chatbot">
      <div className="p-8">
        <ChatbotSetupForm />
      </div>
    </AdminLayout>
  );
};

export default Index;
