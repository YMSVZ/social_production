import { useState } from "react";

export default function FundingForm({ initialData = null, onChange }) {
  const [enabled, setEnabled] = useState(initialData?.enabled || false);
  const [goal, setGoal] = useState(initialData?.goal || "");
  const [purpose, setPurpose] = useState(initialData?.purpose || "");
  const [deadline, setDeadline] = useState(initialData?.deadline || "");

  const handleChange = (updates) => {
    const newData = { enabled, goal, purpose, deadline, ...updates };
    if (onChange) onChange(newData);
  };

  const handleToggle = (value) => {
    setEnabled(value);
    handleChange({ enabled: value });
  };

  return (
    <div style={{ background: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: "12px", padding: "16px" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: enabled ? "16px" : "0" }}>
        <div>
          <div style={{ fontSize: "14px", fontWeight: 600, color: "#111827", marginBottom: "2px" }}>💰 Collective Fundraising</div>
          <div style={{ fontSize: "12px", color: "#6b7280" }}>Pool resources to fund this project collectively</div>
        </div>
        <button
          onClick={() => handleToggle(!enabled)}
          style={{
            width: "44px", height: "24px", borderRadius: "999px", border: "none", cursor: "pointer",
            background: enabled ? "#2d6a4f" : "#d1d5db",
            position: "relative", transition: "background 0.2s"
          }}>
          <div style={{
            width: "20px", height: "20px", borderRadius: "50%", background: "#fff",
            position: "absolute", top: "2px", left: enabled ? "22px" : "2px",
            transition: "left 0.2s", boxShadow: "0 1px 3px rgba(0,0,0,0.2)"
          }} />
        </button>
      </div>

      {enabled && (
        <div style={{ marginTop: "16px", paddingTop: "16px", borderTop: "1px solid #e5e7eb" }}>
          <div style={{ marginBottom: "14px" }}>
            <label style={{ fontSize: "13px", fontWeight: 600, color: "#374151", display: "block", marginBottom: "6px" }}>
              Funding Goal <span style={{ color: "#ef4444" }}>*</span>
            </label>
            <div style={{ position: "relative" }}>
              <span style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", fontSize: "14px", color: "#6b7280", fontFamily: "Inter,sans-serif" }}>$</span>
              <input
                type="number"
                value={goal}
                onChange={e => { setGoal(e.target.value); handleChange({ goal: e.target.value }); }}
                placeholder="12500"
                style={{
                  width: "100%", border: "1px solid #e5e7eb", borderRadius: "8px",
                  padding: "10px 14px 10px 28px", fontSize: "14px", fontFamily: "Inter,sans-serif",
                  color: "#374151", outline: "none"
                }}
                onFocus={e => e.target.style.borderColor = "#52b788"}
                onBlur={e => e.target.style.borderColor = "#e5e7eb"}
              />
            </div>
            <p style={{ fontSize: "12px", color: "#9ca3af", marginTop: "4px" }}>Total amount needed to complete the project</p>
          </div>

          <div style={{ marginBottom: "14px" }}>
            <label style={{ fontSize: "13px", fontWeight: 600, color: "#374151", display: "block", marginBottom: "6px" }}>
              What's the money for?
            </label>
            <textarea
              value={purpose}
              onChange={e => { setPurpose(e.target.value); handleChange({ purpose: e.target.value }); }}
              placeholder="e.g., To purchase tools, rent storage space, and cover initial operating costs"
              maxLength={200}
              style={{
                width: "100%", minHeight: "70px", border: "1px solid #e5e7eb", borderRadius: "8px",
                padding: "10px 14px", fontSize: "13px", fontFamily: "Inter,sans-serif",
                color: "#374151", resize: "vertical", outline: "none"
              }}
              onFocus={e => e.target.style.borderColor = "#52b788"}
              onBlur={e => e.target.style.borderColor = "#e5e7eb"}
            />
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "4px" }}>
              <span style={{ fontSize: "12px", color: "#9ca3af" }}>Brief explanation for potential contributors</span>
              <span style={{ fontSize: "11px", color: "#9ca3af" }}>{purpose.length}/200</span>
            </div>
          </div>

          <div>
            <label style={{ fontSize: "13px", fontWeight: 600, color: "#374151", display: "block", marginBottom: "6px" }}>
              Deadline (optional)
            </label>
            <input
              type="date"
              value={deadline}
              onChange={e => { setDeadline(e.target.value); handleChange({ deadline: e.target.value }); }}
              style={{
                width: "100%", border: "1px solid #e5e7eb", borderRadius: "8px",
                padding: "10px 14px", fontSize: "14px", fontFamily: "Inter,sans-serif",
                color: "#374151", outline: "none"
              }}
              onFocus={e => e.target.style.borderColor = "#52b788"}
              onBlur={e => e.target.style.borderColor = "#e5e7eb"}
            />
            <p style={{ fontSize: "12px", color: "#9ca3af", marginTop: "4px" }}>Fundraising will close on this date</p>
          </div>
        </div>
      )}
    </div>
  );
}
