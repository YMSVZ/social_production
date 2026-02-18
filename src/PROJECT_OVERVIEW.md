SOCIAL PRODUCTION - PROJECT OVERVIEW
=====================================

## What is Social Production?

Social Production is an open-source platform for community organizing that combines discussion forums with real-world collective action. Think Reddit meets GoFundMe meets Meetup, but designed specifically for communities that want to organize, pool resources, and take collective ownership of projects.

The platform enables communities to move beyond just talking about problems — they can coordinate action, fund initiatives collectively, and manage shared resources together.

---

## Core Philosophy

**Collective Ownership Through Collective Funding**

When a project on Social Production receives funding, the purchased material becomes collective property of the *entire userbase* — not just contributors. This isn't charity, donation, or equity investment — it's voluntary provisioning of shared infrastructure for the commons.

Example: A "Brooklyn Tool Library" project raises $12,500 from 89 contributors. The tools belong to ALL users of the platform — including people who join tomorrow. Contributors aren't buying shares; they're building collective infrastructure.

The platform facilitates:
- Voluntary contribution to projects users believe in
- Transparent tracking of all contributions and expenditures  
- Universal access to collectively-owned resources (subject to practical geographic limitations)
- One person = one share in platform governance (one per human user only, to prevent Sybil attacks)
- Organic project selection through community attention and voluntary contribution

**Free riders exist.** This is acknowledged and accepted. The goal isn't to perfectly align individual incentives — it's to build collective infrastructure that gradually replaces capitalist productive relations. Those who contribute do so because they want to see the project succeed and provision the commons, not because they'll own a larger share.

---

## Key Features & Purpose

### 1. THREADS (Discussion)
**Purpose:** Public discussion on organizing strategy, political issues, philosophy, local matters.
**Function:** Create conversations, debate approaches, share knowledge. No action required — just dialogue.
**Example:** "What does productive actually mean for a platform like this?"

### 2. PROJECTS (Collective Action)
**Purpose:** Organize real-world initiatives that require coordination, funding, or collective resources.
**Function:** 
- Start as "Proposed" (gathering interest)
- Move to "Active" (currently organizing)  
- End as "Completed" (project finished)
- Can include meetups, member management, updates feed
- Optional collective fundraising

**Example:** "Community Garden on Vacant Lot — East Village"
- Status: Active
- Members: 5 organizers
- Meetups: Planning session Feb 21, Council prep Mar 7
- Updates: "Parks department contact came through!"

### 3. COLLECTIVE FUNDS
**Purpose:** Pool money to collectively purchase tools, land, equipment, or fund initiatives.

**How it works:**
1. Project creator enables fundraising and sets a goal ($12,500)
2. Community members voluntarily contribute any amount
3. Contributors can choose to be public or anonymous
4. Progress tracked transparently (38% funded, 23 contributors)
5. When goal is reached, collective purchases made
6. Purchased resources become property of entire userbase (all users, not just contributors)

**Critical distinction:** This is NOT crowdfunding for an individual, and contributors do NOT get equity. It's voluntary provisioning of collective infrastructure. The "Brooklyn Tool Library" belongs to ALL users of the platform — they all have theoretical ownership and, where geographically practical, physical access to the tools.

**Governance model:**
- Projects succeed or fail based on community attention and voluntary contribution (not formal voting)
- One person = one share in platform governance (verified real humans; 10 accounts ≠ 10 shares)
- Major platform-level decisions voted on by verified users
- Contribution does NOT grant additional voting power or ownership stake
- Transparent ledger of all expenses
- No refunds after contribution (resources are provisioned, not invested)

**Geographic practicality:** A tool library funded by Brooklyn users is theoretically owned by all users globally, but only Brooklyn users can physically access it. Legal ownership under current capitalist legal forms requires such compromises. The long-term goal is building enough collective productive infrastructure that such legal distinctions become obsolete.

### 4. CHANNELS
**Purpose:** Organize content by topic or geography.
**Types:**
- System channels: Meta, Politics, Philosophy (platform-wide)
- Community channels: Brooklyn, New York, Housing & Construction, etc.
- Users can make their own channels as they want.
**Function:** Users subscribe to relevant channels, content is cross-posted to multiple channels

### 5. USER PROFILES
**Purpose:** Track user's projects, activity.
**Shows:**
- Contribution score (based on upvotes across all content)
- Threads created
- Projects created vs projects joined
- Comments made
- Activity history

### 6. UPDATES FEED (on Projects)
**Purpose:** Keep community informed as projects evolve.
**Triggers automatic updates:**
- Status changes (Proposed → Active)
- Funding milestones (25%, 50%, 75%, 100%)
- New meetups scheduled
**Creators can post manual updates:** Progress reports, announcements, changes

### 7. MEETUPS
**Purpose:** Coordinate in-person gatherings for projects.
**Function:**
- Scheduled with date/time/location
- RSVP tracking ("23 going")
- Multiple meetups per project
- Can be recurring (weekly classes) or one-time (planning session)

---

## Platform Governance & Ownership

**Who controls the money?**
Short term: Platform holds funds in escrow, releases when goals met or on schedule.
Long term: Exploring DAO (Decentralized Autonomous Organization) models where fund governance is fully on-chain and community-controlled.

**Who owns the platform?**
The platform itself is open-source (AGPL-3.0 license). Code is public, forkable by communities but not by corporations.

Deployment/hosting will be community-funded and governed. No venture capital, no ads, no data monetization.

**Anti-corporate protections:**
- AGPL-3.0 license (requires source disclosure even for SaaS)
- Explicitly non-commercial clause under consideration
- Name/trademark protection to prevent corporate co-option
- Governance structure that prevents acquisition or VC takeover

---

## Technical Architecture

**Frontend:** React (Vite)
**Backend (planned):** Supabase (PostgreSQL + Auth + Storage + Real-time)
**Payments (planned):** Stripe Connect for collective funds

**Long-term vision:** Once sufficient land and means of production are collectively owned, the need for monetary collective funds diminishes. The platform facilitates transition from provisioning-through-money to direct organization of collective production.
**Hosting:** Vercel (frontend) + Supabase (backend)

**Current Status:** 
Frontend complete with mock data. All UI/UX finished. Ready for backend integration.

**Database Schema (planned):**
- users (auth, profiles, contribution scores)
- posts (threads + projects, polymorphic)
- comments (nested, infinite depth)
- channels (system + community)
- projects (extends posts, adds status, members, meetups, funds)
- funds (goals, raised, contributors, transactions)
- meetups (date/time/location, RSVPs)
- updates (project activity feed)
- votes (upvotes/downvotes)
- subscriptions (user → channel relationships)

---

## Use Cases

**1. Tool Libraries**
Community members contribute $10k to buy drills, saws, ladders. Tools become property of entire userbase (not just the 50 contributors). All verified users have theoretical ownership; local users have practical access. Collectively owned infrastructure.

**2. Community Land Trusts**
100 people pool funds to buy vacant lot. Land becomes property of the platform's collective (all users, one person = one share). Contributor who donated $10,000 has same ownership stake as user who donated $10. Legal ownership held collectively, protected from speculation, democratically managed.

**3. Productive Activity Networks (Beyond Mutual Aid)**
Organize collective production: build housing, cultivate land, manufacture goods. Fund shared resources (tools, workshops, land). Plan and execute real productive activity collectively. 

The goal isn't just mutual aid (helping each other survive under capitalism) — it's building alternative productive relations. Replace wage labor and capital as the organizing logic of production. Start small (community gardens, tool libraries) and gradually expand to encompass more spheres of production (housing construction, food production, manufacturing).

Collective ownership of land and means of production, organized through the platform, managed democratically by users through action not votes.

**4. Cooperative Workspaces**
Pool funds for shared studio, workshop, or office. All contributors have access and governance rights.

**5. Neighborhood Campaigns**
Organize petition drives, community meetings, council lobbying. Fund flyers, legal help, meeting spaces.

**6. Educational Programs**
Free classes (English, coding, trades). Fund materials, space rental. Collectively governed curriculum.

---

## Why This Matters

Most online organizing platforms are:
- **Extractive:** Facebook owns your community data
- **Passive:** Reddit is just discussion, no collective action
- **Individualistic:** GoFundMe raises money for one person, not collective ownership
- **Corporate-owned:** Subject to algorithmic manipulation, ads, data mining

Social Production is:
- **Community-owned:** Open source, governed by users
- **Action-oriented:** Discussion leads to real-world organizing
- **Collectivist:** Shared ownership of funded resources
- **Transparent:** All funds, all decisions, all governance public

This platform exists to help communities organize themselves, pool resources, and build collective power — outside of both state and corporate control.

---

## Current Development Status

✅ Complete: All frontend UI/UX
✅ Complete: All forms (create, edit, post updates)
✅ Complete: Collective funding UI
✅ Complete: User profiles, channels, comments
⏳ Next: Supabase backend integration
⏳ Next: Authentication system
⏳ Next: Stripe payment processing
⏳ Next: Real-time updates
⏳ Future: DAO governance for fund management
⏳ Future: On-chain transparency for large collective purchases

---

## For Contributors

**This is open source because:**
We believe organizing tools should be owned by organizers, not corporations. The code is public so communities can:
- Fork it for their specific needs
- Self-host if they want full control  
- Audit it for security and trust
- Improve it collectively

**How to contribute:**
See CONTRIBUTING.md (to be created) for development setup, code standards, and governance process.

**License:** AGPL-3.0 (requires source disclosure even for SaaS deployments)

**Contact:** YMSVZ@proton.me

---

## Legal & Ethical Considerations

**Fund holding:** Platform acts as escrow. Legal structure TBD (likely nonprofit or cooperative).

**Liability:** Projects are community-organized. Platform provides tools, not guarantees. Clear ToS needed.

**Refunds:** No refunds after contribution. Contributions are voluntary provisioning of collective infrastructure, not investments. Once contributed, funds enter the commons.

**Dispute resolution:** Community governance process TBD. Exploring options: elected councils, community mediators, on-chain voting.

**Tax implications:** Contributors may receive tax documentation for large contributions. Projects may need to handle 1099s. Legal guidance needed.

---

This platform is being built in public. All code, all decisions, all governance — transparent and community-driven.

If you're interested in contributing (code, organizing experience, legal help, funding model design), please get in touch.

---

Document version: 1.0
Last updated: February 2026
