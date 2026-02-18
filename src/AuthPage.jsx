import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function AuthPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const defaultMode = searchParams.get("mode") === "signup" ? "signup" : "login";

  const [mode, setMode] = useState(defaultMode);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!email.trim()) e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) e.email = "Enter a valid email";
    if (mode === "signup") {
      if (!username.trim()) e.username = "Username is required";
      else if (username.length < 3) e.username = "Username must be at least 3 characters";
      else if (/\s/.test(username)) e.username = "Username cannot contain spaces";
    }
    if (!password) e.password = "Password is required";
    else if (password.length < 8) e.password = "Password must be at least 8 characters";
    if (mode === "signup" && password !== confirm) e.confirm = "Passwords do not match";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      setSubmitted(true);
    }
  };

  const inputStyle = (hasError) => ({
    width: "100%",
    border: `1px solid ${hasError ? "#fca5a5" : "#e5e7eb"}`,
    borderRadius: "8px",
    padding: "10px 14px",
    fontSize: "14px",
    fontFamily: "Inter,sans-serif",
    color: "#374151",
    outline: "none",
    background: hasError ? "#fff5f5" : "#fff",
    transition: "border-color 0.15s",
  });

  if (submitted) return (
    <div style={{ fontFamily: "Inter,sans-serif", background: "#f6f7f8", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: "16px", padding: "48px 40px", textAlign: "center", maxWidth: "400px", width: "100%" }}>
        <div style={{ fontSize: "40px", marginBottom: "16px" }}>🌱</div>
        <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#111827", marginBottom: "8px" }}>
          {mode === "signup" ? "Welcome aboard!" : "Welcome back!"}
        </h2>
        <p style={{ fontSize: "14px", color: "#6b7280", marginBottom: "24px", lineHeight: "1.6" }}>
          {mode === "signup"
            ? "Your account has been created. Once the backend is connected you'll be fully logged in."
            : "You're logged in. Once the backend is connected this will be fully functional."}
        </p>
        <button onClick={() => navigate("/")}
          style={{ background: "#2d6a4f", border: "none", color: "#fff", padding: "10px 28px", borderRadius: "8px", fontSize: "14px", fontWeight: 600, cursor: "pointer", fontFamily: "Inter,sans-serif" }}
          onMouseEnter={e => e.currentTarget.style.background = "#1f4f3a"}
          onMouseLeave={e => e.currentTarget.style.background = "#2d6a4f"}>
          Go to feed
        </button>
      </div>
    </div>
  );

  return (
    <div style={{ fontFamily: "Inter,sans-serif", background: "#f6f7f8", minHeight: "100vh", color: "#1c1c1c" }}>

      {/* TOP NAV */}
      <div style={{ background: "#fff", borderBottom: "1px solid #e5e7eb", height: "48px", display: "flex", alignItems: "center", padding: "0 20px", boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }} onClick={() => navigate("/")}>
          <div style={{ width: "28px", height: "28px", background: "linear-gradient(135deg,#2d6a4f,#52b788)", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px" }}>🌱</div>
          <span style={{ fontWeight: 700, fontSize: "15px", color: "#1c1c1c", letterSpacing: "-0.3px" }}>Social Production</span>
        </div>
        <button onClick={() => navigate("/")}
          style={{ marginLeft: "24px", background: "none", border: "none", cursor: "pointer", color: "#6b7280", fontSize: "13px", fontWeight: 500, fontFamily: "Inter,sans-serif" }}
          onMouseEnter={e => e.currentTarget.style.color = "#2d6a4f"}
          onMouseLeave={e => e.currentTarget.style.color = "#6b7280"}>
          ← Back to feed
        </button>
      </div>

      {/* CENTERED FORM */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "calc(100vh - 48px)", padding: "32px 16px" }}>
        <div style={{ width: "100%", maxWidth: "420px" }}>

          {/* Logo */}
          <div style={{ textAlign: "center", marginBottom: "28px" }}>
            <div style={{ width: "48px", height: "48px", background: "linear-gradient(135deg,#2d6a4f,#52b788)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", margin: "0 auto 12px" }}>🌱</div>
            <h1 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", letterSpacing: "-0.3px", marginBottom: "4px" }}>
              {mode === "login" ? "Welcome back" : "Join Social Production"}
            </h1>
            <p style={{ fontSize: "14px", color: "#6b7280" }}>
              {mode === "login"
                ? "Log in to your account to continue"
                : "Create an account to start contributing"}
            </p>
          </div>

          {/* Mode toggle */}
          <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: "12px", padding: "4px", display: "flex", marginBottom: "20px", gap: "4px" }}>
            {["login", "signup"].map(m => (
              <button key={m} onClick={() => { setMode(m); setErrors({}); }} style={{
                flex: 1, padding: "8px", borderRadius: "9px", border: "none", cursor: "pointer",
                fontFamily: "Inter,sans-serif", fontSize: "13px", fontWeight: 600,
                background: mode === m ? "#2d6a4f" : "transparent",
                color: mode === m ? "#fff" : "#6b7280",
                transition: "all 0.15s",
              }}>
                {m === "login" ? "Log in" : "Sign up"}
              </button>
            ))}
          </div>

          {/* Form */}
          <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: "12px", padding: "24px" }}>

            {/* Email */}
            <div style={{ marginBottom: "16px" }}>
              <label style={{ fontSize: "13px", fontWeight: 600, color: "#374151", display: "block", marginBottom: "6px" }}>
                Email <span style={{ color: "#ef4444" }}>*</span>
              </label>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)}
                placeholder="you@example.com"
                style={inputStyle(errors.email)}
                onFocus={e => e.target.style.borderColor = "#52b788"}
                onBlur={e => e.target.style.borderColor = errors.email ? "#fca5a5" : "#e5e7eb"}
              />
              {errors.email && <div style={{ fontSize: "12px", color: "#ef4444", marginTop: "4px" }}>{errors.email}</div>}
            </div>

            {/* Username — signup only */}
            {mode === "signup" && (
              <div style={{ marginBottom: "16px" }}>
                <label style={{ fontSize: "13px", fontWeight: 600, color: "#374151", display: "block", marginBottom: "6px" }}>
                  Username <span style={{ color: "#ef4444" }}>*</span>
                </label>
                <div style={{ position: "relative" }}>
                  <span style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", fontSize: "14px", color: "#9ca3af", fontFamily: "Inter,sans-serif" }}>u/</span>
                  <input type="text" value={username} onChange={e => setUsername(e.target.value)}
                    placeholder="yourname"
                    style={{ ...inputStyle(errors.username), paddingLeft: "32px" }}
                    onFocus={e => e.target.style.borderColor = "#52b788"}
                    onBlur={e => e.target.style.borderColor = errors.username ? "#fca5a5" : "#e5e7eb"}
                  />
                </div>
                {errors.username
                  ? <div style={{ fontSize: "12px", color: "#ef4444", marginTop: "4px" }}>{errors.username}</div>
                  : <div style={{ fontSize: "12px", color: "#9ca3af", marginTop: "4px" }}>This is how others will see you. No spaces.</div>
                }
              </div>
            )}

            {/* Password */}
            <div style={{ marginBottom: "16px" }}>
              <label style={{ fontSize: "13px", fontWeight: 600, color: "#374151", display: "block", marginBottom: "6px" }}>
                Password <span style={{ color: "#ef4444" }}>*</span>
              </label>
              <input type="password" value={password} onChange={e => setPassword(e.target.value)}
                placeholder={mode === "signup" ? "At least 8 characters" : "Your password"}
                style={inputStyle(errors.password)}
                onFocus={e => e.target.style.borderColor = "#52b788"}
                onBlur={e => e.target.style.borderColor = errors.password ? "#fca5a5" : "#e5e7eb"}
              />
              {errors.password && <div style={{ fontSize: "12px", color: "#ef4444", marginTop: "4px" }}>{errors.password}</div>}
            </div>

            {/* Confirm password — signup only */}
            {mode === "signup" && (
              <div style={{ marginBottom: "16px" }}>
                <label style={{ fontSize: "13px", fontWeight: 600, color: "#374151", display: "block", marginBottom: "6px" }}>
                  Confirm Password <span style={{ color: "#ef4444" }}>*</span>
                </label>
                <input type="password" value={confirm} onChange={e => setConfirm(e.target.value)}
                  placeholder="Repeat your password"
                  style={inputStyle(errors.confirm)}
                  onFocus={e => e.target.style.borderColor = "#52b788"}
                  onBlur={e => e.target.style.borderColor = errors.confirm ? "#fca5a5" : "#e5e7eb"}
                />
                {errors.confirm && <div style={{ fontSize: "12px", color: "#ef4444", marginTop: "4px" }}>{errors.confirm}</div>}
              </div>
            )}

            {/* Terms — signup only */}
            {mode === "signup" && (
              <div style={{ marginBottom: "20px", padding: "12px", background: "#f9fafb", borderRadius: "8px", fontSize: "12px", color: "#6b7280", lineHeight: "1.6" }}>
                By signing up you agree to our <span style={{ color: "#2d6a4f", cursor: "pointer", fontWeight: 500 }}>Terms of Service</span> and <span style={{ color: "#2d6a4f", cursor: "pointer", fontWeight: 500 }}>Privacy Policy</span>.
              </div>
            )}

            {/* Forgot password — login only */}
            {mode === "login" && (
              <div style={{ textAlign: "right", marginBottom: "20px" }}>
                <span style={{ fontSize: "12px", color: "#2d6a4f", cursor: "pointer", fontWeight: 500 }}>Forgot password?</span>
              </div>
            )}

            {/* Submit */}
            <button onClick={handleSubmit}
              style={{ width: "100%", background: "#2d6a4f", border: "none", color: "#fff", padding: "11px", borderRadius: "8px", fontSize: "14px", fontWeight: 600, cursor: "pointer", fontFamily: "Inter,sans-serif" }}
              onMouseEnter={e => e.currentTarget.style.background = "#1f4f3a"}
              onMouseLeave={e => e.currentTarget.style.background = "#2d6a4f"}>
              {mode === "login" ? "Log in" : "Create account"}
            </button>
          </div>

          {/* Switch mode link */}
          <div style={{ textAlign: "center", marginTop: "16px", fontSize: "13px", color: "#6b7280" }}>
            {mode === "login" ? "Don't have an account? " : "Already have an account? "}
            <span
              onClick={() => { setMode(mode === "login" ? "signup" : "login"); setErrors({}); }}
              style={{ color: "#2d6a4f", fontWeight: 600, cursor: "pointer" }}>
              {mode === "login" ? "Sign up" : "Log in"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
