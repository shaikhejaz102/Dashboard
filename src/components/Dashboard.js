import React from 'react'

//img
// import img from "./images/bull.png"
import img1 from "./images/github.png"
import img2 from "./images/in-stock.png"
import img3 from "./images/market-analysis.png"
import img4 from "./images/spotify.png"
import img5 from "./images/stock-market.png"
import img6 from "./images/youtube.png"
import img from "./images/3d-rendering-donut-chart-isolated_680816-216.png"

const Dashboard = () => {
    return (
        <>
            <div className="modal fade" id="depositLiquidityModal" tabindex="-1" aria-labelledby="depositLiquidityModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content overflow-hidden">
                        <div className="modal-header pb-0 border-0">
                            <h1 className="modal-title h4" id="depositLiquidityModalLabel">Deposit liquidity</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body undefined">
                            <form className="vstack gap-6">
                                <div className="vstack gap-1">
                                    <div className="bg-body-secondary rounded-3 p-4">
                                        <div className="d-flex justify-content-between text-xs text-muted">
                                            <span className="fw-semibold">From</span> <span>Balance: 10,000 ADA</span></div>
                                        <div className="d-flex justify-content-between gap-2 mt-4">
                                            <input type="tel" className="form-control form-control-flush text-xl fw-bold flex-fill" placeholder="0.00" />
                                            <button className="btn btn-neutral shadow-none rounded-pill flex-none d-flex align-items-center gap-2 py-2 ps-2 pe-4">
                                                <img src="../../img/crypto/color/ada.svg" className="w-rem-6 h-rem-6" alt="..." />
                                                <span className="text-xs fw-semibold text-heading ms-1">ADA</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="position-relative text-center my-n4 overlap-10">
                                        <div className="icon icon-sm icon-shape bg-body shadow-soft-3 rounded-circle text-sm text-body-tertiary">
                                            <i className="bi bi-arrow-down-up"></i>
                                        </div>
                                    </div>
                                    <div className="bg-body-secondary rounded-3 p-4">
                                        <div className="d-flex justify-content-between text-xs text-muted">
                                            <span className="fw-semibold">To</span> <span>Balance: 0 SUN</span>
                                        </div>
                                        <div className="d-flex justify-content-between gap-2 mt-4">
                                            <input type="tel" className="form-control form-control-flush text-xl fw-bold flex-fill" placeholder="0.00" />
                                            <button className="btn btn-neutral shadow-none rounded-pill flex-none d-flex align-items-center gap-2 py-2 ps-2 pe-4">
                                                <img src="../../img/pools/pool-1.png" className="w-rem-6 h-rem-6 rounded-circle" alt="..." />
                                                <span className="text-xs fw-semibold text-heading ms-1">SUN</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label className="form-label">Slippage tolerance</label>
                                    <div className="d-flex flex-wrap gap-1 gap-sm-2">
                                        <div className="w-sm-56 input-group input-group-sm input-group-inline">
                                            <input type="search" className="form-control" placeholder="1" />
                                            <span className="input-group-text">%</span>
                                        </div>
                                        <div className="flex-fill">
                                            <input type="radio" className="btn-check" name="options" id="option1" checked="checked" />
                                            <label className="btn btn-sm btn-neutral w-100" for="option1">0.5%</label>
                                        </div>
                                        <div className="flex-fill">
                                            <input type="radio" className="btn-check" name="options" id="option2" checked="checked" />
                                            <label className="btn btn-sm btn-neutral w-100" for="option2">1%</label>
                                        </div>
                                        <div className="flex-fill">
                                            <input type="radio" className="btn-check" name="options" id="option3" checked="checked" />
                                            <label className="btn btn-sm btn-neutral w-100" for="option3">3%</label>
                                        </div>
                                    </div>
                                </div>
                                <button type="button" className="btn btn-primary w-100">Provide liquidity</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="connectWalletModal" tabindex="-1" aria-labelledby="connectWalletModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content overflow-hidden">
                        <div className="modal-header pb-0 border-0">
                            <h1 className="modal-title h4" id="connectWalletModalLabel">Connect your wallet</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div><div className="modal-body undefined">
                            <div className="list-group list-group-flush gap-2">
                                <div className="list-group-item border rounded d-flex gap-3 p-4 bg-body-secondary-hover">
                                    <div className="icon flex-none">
                                        <img src="../../img/wallets/metamask.png" className="w-rem-8 h-rem-8" alt="..." />
                                    </div>
                                    <div className="d-flex align-items-center flex-fill">
                                        <div>
                                            <a href="#" className="stretched-link text-heading text-sm fw-bold">MetaMask</a>
                                        </div>
                                        <div className="ms-auto">
                                            <span className="badge badge-md text-bg-primary">Popular</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="list-group-item border rounded d-flex gap-3 p-4 bg-body-secondary-hover">
                                    <div className="icon flex-none">
                                        <img src="../../img/wallets/coinbase.webp" className="w-rem-8 h-rem-8" alt="..." />
                                    </div>
                                    <div className="d-flex align-items-center flex-fill">
                                        <div>
                                            <a href="#" className="stretched-link text-heading text-sm fw-bold">Coinbase Wallet</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="list-group-item border rounded d-flex gap-3 p-4 bg-body-secondary-hover">
                                    <div className="icon flex-none">
                                        <img src="../../img/wallets/walletconnect.png" className="w-rem-8 h-rem-8" alt="..." />
                                    </div>
                                    <div className="d-flex align-items-center flex-fill">
                                        <div>
                                            <a href="#" className="stretched-link text-heading text-sm fw-bold">WalletConnect</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="list-group-item border rounded d-flex gap-3 p-4 bg-body-secondary-hover">
                                    <div className="icon flex-none">
                                        <img src="../../img/wallets/phantom.png" className="w-rem-8 h-rem-8" alt="..." />
                                    </div>
                                    <div className="d-flex align-items-center flex-fill">
                                        <div>
                                            <a href="#" className="stretched-link text-heading text-sm fw-bold">Phantom</a>
                                        </div>
                                        <div className="ms-auto"><span className="badge badge-md text-bg-light">Solana</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="list-group-item border rounded d-flex gap-3 p-4 bg-body-secondary-hover">
                                    <div className="icon flex-none">
                                        <img src="../../img/wallets/core.png" className="w-rem-8 h-rem-8" alt="..." />
                                    </div>
                                    <div className="d-flex align-items-center flex-fill">
                                        <div>
                                            <a href="#" className="stretched-link text-heading text-sm fw-bold">Core</a>
                                        </div>
                                        <div className="ms-auto">
                                            <span className="badge badge-md text-bg-light">Avalanche</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="list-group-item border rounded d-flex gap-3 p-4 bg-body-secondary-hover">
                                    <div className="icon flex-none">
                                        <img src="../../img/wallets/glow.svg" className="w-rem-8 h-rem-8" alt="..." />
                                    </div>
                                    <div className="d-flex align-items-center flex-fill">
                                        <div>
                                            <a href="#" className="stretched-link text-heading text-sm fw-bold">Glow</a>
                                        </div>
                                        <div className="ms-auto">
                                            <span className="badge badge-md text-bg-light">Solana</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-xs text-muted mt-6">By connecting wallet, you agree to Satoshi's <a href="#" className="fw-bold">Terms of Service</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-column flex-lg-row h-lg-100 gap-1"> {/** */}
                <nav className="flex-none navbar navbar-vertical navbar-expand-lg navbar-light show vh-lg-100 px-0 py-2 bg-transparent" id="sidebar">
                    <div className="container-fluid px-3 px-md-4 px-lg-6">
                        <button className="navbar-toggler ms-n2" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarCollapse" aria-controls="sidebarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span></button>
                        <a className="navbar-brand d-inline-block py-lg-1 mb-lg-5" href="/pages/dashboard.html">Shaikh Ejaz

                            {/* <img src="../../img/logos/logo-dark.svg" className="logo-dark h-rem-8 h-rem-md-10" alt="..." />
                            <img src="../../img/logos/logo-light.svg" className="logo-light h-rem-8 h-rem-md-10" alt="..." /> */}
                        </a>
                        <div className="navbar-user d-lg-none"><div className="dropdown">
                            <a className="d-flex align-items-center" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="false" aria-expanded="false">
                                <div>
                                    <div className="avatar avatar-sm text-bg-secondary rounded-circle">EJ</div>
                                </div>
                                <div className="d-none d-sm-block ms-3"><span className="h6">Ejaz</span>
                                </div>
                                <div className="d-none d-md-block ms-md-2">
                                    <i className="bi bi-chevron-down text-muted text-xs"></i>
                                </div>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end">
                                <div className="dropdown-header">
                                    <span className="d-block text-sm text-muted mb-1">Signed in as</span>
                                    <span className="d-block text-heading fw-semibold">Alexis Enache</span>
                                </div>
                                <div className="dropdown-divider">
                                </div>
                                <a className="dropdown-item" href="#">
                                    <i className="bi bi-house me-3">
                                    </i>Home
                                </a>
                                <a className="dropdown-item" href="#"><i className="bi bi-pencil me-3"></i>Edit profile</a>
                                <div className="dropdown-divider">
                                </div>
                                <a className="dropdown-item" href="#"><i className="bi bi-gear me-3"></i>Settings </a>
                                <a className="dropdown-item" href="#"><i className="bi bi-image me-3"></i>Media </a>
                                <a className="dropdown-item" href="#"><i className="bi bi-box-arrow-up me-3"></i>Share</a>
                                <div className="dropdown-divider">
                                </div>
                                <a className="dropdown-item" href="#"><i className="bi bi-person me-3"></i>Login</a>
                            </div>
                        </div>
                        </div>
                        <div className="collapse navbar-collapse overflow-x-hidden" id="sidebarCollapse">
                            <ul className="navbar-nav">
                                <li className="nav-item my-1">
                                    <a style={{ color: '#fff' }} className="nav-link d-flex align-items-center rounded-pill active" href="#sidebar-dashboards" data-bs-toggle="collapse" role="button" aria-expanded="true" aria-controls="sidebar-dashboards">
                                        <i className="bi bi-house-fill">
                                        </i> <span>Dashboards</span> <span className="badge badge-sm rounded-pill me-n2 bg-success-subtle text-success ms-auto"></span>
                                    </a>
                                    <div className="collapse show" id="sidebar-dashboards">
                                        <ul className="nav nav-sm flex-column mt-1">
                                            <li className="nav-item">
                                                <a href="/pages/dashboard.html" className="nav-link fw-bold">Default</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="/pages/dashboard-analytics.html" className="nav-link">Analytics</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="/pages/dashboard-wallet.html" className="nav-link">Wallet</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-item my-1">
                                    <a className="nav-link d-flex align-items-center rounded-pill" href="#sidebar-pages" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebar-pages">
                                        <i className="bi bi-bar-chart-fill"></i>
                                        <span>Pages</span> <span className="badge badge-sm rounded-pill me-n2 bg-success-subtle text-success ms-auto"></span>
                                    </a>
                                    <div className="collapse" id="sidebar-pages">
                                        <ul className="nav nav-sm flex-column mt-1">
                                            <li className="nav-item">
                                                <a href="/pages/page-overview.html" className="nav-link">Overview</a>
                                            </li>
                                            <li className="nav-item"><a href="/pages/page-table-listing.html" className="nav-link">Table Listing</a>
                                            </li>
                                            <li className="nav-item"><a href="/pages/page-details.html" className="nav-link">Details</a>
                                            </li>
                                            <li className="nav-item"><a href="/pages/page-create-form.html" className="nav-link">Create Form</a>
                                            </li>
                                            <li className="nav-item"><a href="/pages/page-list.html" className="nav-link">Large List</a>
                                            </li>
                                            <li className="nav-item"><a href="/pages/page-checklist.html" className="nav-link">Checklist</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="/pages/page-collection.html" className="nav-link">Collection</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-item my-1">
                                    <a className="nav-link d-flex align-items-center rounded-pill" href="#sidebar-account" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebar-account">
                                        <i className="bi bi-gear-fill"></i>
                                        <span>Account</span> <span className="badge badge-sm rounded-pill me-n2 bg-success-subtle text-success ms-auto"></span>
                                    </a>
                                    <div className="collapse" id="sidebar-account">
                                        <ul className="nav nav-sm flex-column mt-1">
                                            <li className="nav-item"><a href="/pages/account-general.html" className="nav-link">Settings</a></li><li className="nav-item">
                                                <a href="/pages/account-password.html" className="nav-link">Password</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="/pages/account-billing.html" className="nav-link">Billing</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="/pages/account-notifications.html" className="nav-link">Notifications</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="/pages/account-team.html" className="nav-link">Team</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="/pages/login.html" className="nav-link">Login</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="/pages/register.html" className="nav-link">Register</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-item my-1">
                                    <a className="nav-link d-flex align-items-center rounded-pill" href="#sidebar-other" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebar-other">
                                        <i className="bi bi-file-break-fill">
                                        </i> <span>Other</span>
                                        <span className="badge badge-sm rounded-pill me-n2 bg-success-subtle text-success ms-auto"></span>
                                    </a>
                                    <div className="collapse" id="sidebar-other">
                                        <ul className="nav nav-sm flex-column mt-1">
                                            <li className="nav-item">
                                                <a href="/pages/other-pricing.html" className="nav-link">Pricing Plans</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="/pages/terms.html" className="nav-link">Terms of Service</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="/pages/error.html" className="nav-link">Error Page</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="/index.html" className="nav-link">Landing Page</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                            <hr className="navbar-divider my-5 opacity-70" />
                            <ul className="navbar-nav">
                                <li >
                                    <span className="nav-link text-xs fw-semibold text-uppercase ls-wide" style={{ color: '#fff' }}>Resources</span>
                                </li>
                                <li className="nav-item my-1">
                                    <a className="nav-link d-flex align-items-center rounded-pill" href="/docs"><i className="bi bi-book-fill"></i> <span>Documentation</span> <span className="badge badge-sm rounded-pill me-n2 bg-success-subtle text-success ms-auto"></span></a>
                                </li>
                                <li className="nav-item my-1">
                                    <a className="nav-link d-flex align-items-center rounded-pill" href="#sidebar-components" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebar-components">
                                        <i className="bi bi-grid-1x2-fill"></i> <span>Components</span> <span className="badge badge-sm rounded-pill me-n2 bg-success-subtle text-success ms-auto"></span>
                                    </a>
                                    <div className="collapse" id="sidebar-components">
                                        <ul className="nav nav-sm flex-column mt-1">
                                            <li className="nav-item">
                                                <a href="/docs/components.html#alerts" className="nav-link">Alerts</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="/docs/components.html#avatars" className="nav-link">Avatars</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="/docs/components.html#badges" className="nav-link">Badges</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="/docs/components.html#buttons" className="nav-link">Buttons</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="/docs/components.html#button-group" className="nav-link">Button Group</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="/docs/components.html#cards" className="nav-link">Cards</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="/docs/components.html#dropdowns" className="nav-link">Dropdowns</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="/docs/components.html#forms" className="nav-link">Forms</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="/docs/components.html#list-groups" className="nav-link">List Groups</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-item my-1">
                                    <a className="nav-link d-flex align-items-center rounded-pill" href="/widgets.html">
                                        <i className="bi bi-calendar2-plus-fill"></i> <span>Widgets</span>
                                        <span className="badge badge-sm rounded-pill me-n2 bg-warning-subtle text-warning ms-auto">🔥 Hot</span>
                                    </a>
                                </li>
                            </ul>
                            <div className="mt-auto">
                            </div>
                            <div className="card bg-dark border-0 mt-5 mb-3">
                                <div className="card-body">
                                    <div className="vstack gap-4">
                                        <i className="bi bi-rocket-takeoff-fill text-white text-2xl"></i>
                                        <p className="text-sm text-white text-opacity-70">Upgrade your account to Pro for even more examples.</p>
                                        <a href="/pages/other-pricing.html" className="btn btn-sm btn-primary w-100">Upgade now<i className="bi bi-arrow-right ms-2">
                                        </i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="flex-lg-fill overflow-x-auto ps-lg-1 vstack vh-lg-100 position-relative">
                    <div className="d-none d-lg-flex py-3"><div className="flex-none">
                        <div className="input-group input-group-sm input-group-inline w-rem-64 rounded-pill">
                            <span className="input-group-text rounded-start-pill"><i className="bi bi-search me-2"></i> </span>
                            <input type="search" className="form-control ps-0 rounded-end-pill" placeholder="Search" aria-label="Search" />
                        </div>
                    </div>
                        <div className="d-lg-none d-xxl-flex align-items-center gap-4 px-4 scrollable-x">
                            <div className="d-flex gap-2 text-xs">
                                <span className="text-heading fw-semibold">Cryptos:</span>
                                <span className="text-muted">21,713</span>
                            </div>
                            <div className="d-flex gap-2 text-xs">
                                <span className="text-heading fw-semibold">Market Cap:</span>
                                <span className="text-muted">$871,322,862,585</span>
                            </div>
                            <div className="d-flex gap-2 text-xs">
                                <span className="text-heading fw-semibold">24h Vol:</span>
                                <span className="text-muted">$180,639,667,232</span>
                            </div>
                        </div>
                        <div className="hstack flex-fill justify-content-end flex-nowrap gap-6 ms-auto px-6 px-xxl-8">
                            <button type="button" className="btn btn-xs btn-primary rounded-pill text-nowrap" data-bs-target="#connectWalletModal" data-bs-toggle="modal">Connect</button>
                            <div className="dropdown d-none">
                                <a href="#" className="nav-link" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="bi bi-sun-fill">
                                    </i></a>
                                <div className="dropdown-menu">
                                    <button type="button" className="dropdown-item d-flex align-items-center active" data-bs-theme-value="light">Light</button>
                                    <button type="button" className="dropdown-item d-flex align-items-center" data-bs-theme-value="dark">Dark</button>
                                    <button type="button" className="dropdown-item d-flex align-items-center" data-bs-theme-value="auto">System</button>
                                </div>
                            </div>
                            <div className="dropdown">
                                <a href="#" className="nav-link" id="dropdown-notifications" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="bi bi-bell"></i>
                                </a>
                                <div className="dropdown-menu dropdown-menu-end px-2" aria-labelledby="dropdown-notifications">
                                    <div className="dropdown-item d-flex align-items-center">
                                        <h6 className="dropdown-header px-0">Notifications</h6>
                                        <a href="#" className="text-sm fw-semibold ms-auto">Clear all</a>
                                    </div>
                                    <div className="dropdown-item py-3 d-flex">
                                        <div>
                                            <div className="avatar bg-primary text-white rounded-circle">RF</div>
                                        </div>
                                        <div className="flex-fill ms-3">
                                            <div className="text-sm lg-snug w-rem-64 text-wrap">
                                                <a href="#" className="fw-semibold text-heading text-primary-hover">Robert</a> sent a message to <a href="#" className="fw-semibold text-heading text-primary-hover">Webpixels</a>
                                            </div>
                                            <span className="text-muted text-xs">30 mins ago</span>
                                        </div>
                                    </div>
                                    <div className="dropdown-item py-3 d-flex">
                                        <div>
                                            <img src="../../img/people/img-1.jpg" className="avatar rounded-circle" alt="..." />
                                        </div>
                                        <div className="flex-fill ms-3">
                                            <div className="text-sm lg-snug w-rem-64 text-wrap">
                                                <a href="#" className="fw-semibold text-heading text-primary-hover">Robert</a> sent a message to <a href="#" className="fw-semibold text-heading text-primary-hover">Webpixels</a>
                                            </div>
                                            <span className="text-muted text-xs">30 mins ago</span>
                                        </div>
                                    </div>
                                    <div className="dropdown-item py-3 d-flex">
                                        <div>
                                            <img src="../../img/people/img-2.jpg" className="avatar rounded-circle" alt="..." />
                                        </div>
                                        <div className="flex-fill ms-3">
                                            <div className="text-sm lg-snug w-rem-64 text-wrap">
                                                <a href="#" className="fw-semibold text-heading text-primary-hover">Robert</a> sent a message to <a href="#" className="fw-semibold text-heading text-primary-hover">Webpixels</a>
                                            </div>
                                            <span className="text-muted text-xs">30 mins ago</span>
                                        </div>
                                    </div>
                                    <div className="dropdown-item py-3 d-flex">
                                        <div>
                                            <div className="avatar bg-success text-white rounded-circle">KW</div>
                                        </div>
                                        <div className="flex-fill ms-3">
                                            <div className="text-sm lg-snug w-rem-64 text-wrap">
                                                <a href="#" className="fw-semibold text-heading text-primary-hover">Robert</a> sent a message to <a href="#" className="fw-semibold text-heading text-primary-hover">Webpixels</a>
                                            </div>
                                            <span className="text-muted text-xs">30 mins ago</span>
                                        </div>
                                    </div>
                                    <div className="dropdown-item py-3 d-flex">
                                        <div>
                                            <img src="../../img/people/img-4.jpg" className="avatar rounded-circle" alt="..." />
                                        </div>
                                        <div className="flex-fill ms-3">
                                            <div className="text-sm lg-snug w-rem-64 text-wrap">
                                                <a href="#" className="fw-semibold text-heading text-primary-hover">Robert</a> sent a message to <a href="#" className="fw-semibold text-heading text-primary-hover">Webpixels</a>
                                            </div>
                                            <span className="text-muted text-xs">30 mins ago</span>
                                        </div>
                                    </div>
                                    <div className="dropdown-divider">
                                    </div>
                                    <div className="dropdown-item py-2 text-center">
                                        <a href="#" className="fw-semibold text-muted text-primary-hover">View all</a>
                                    </div>
                                </div>
                            </div>
                            <div className="dropdown">
                                <a className="avatar avatar-sm  rounded-circle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="false" aria-expanded="false">
                                    <img style={{ width: '2vw' }} src={img1} />
                                </a>
                                <div className="dropdown-menu dropdown-menu-end">
                                    <div className="dropdown-header">
                                        <span className="d-block text-sm text-muted mb-1">Signed in as</span>
                                        <span className="d-block text-heading fw-semibold">Alexis Enache</span>
                                    </div>
                                    <div className="dropdown-divider">
                                    </div>
                                    <a className="dropdown-item" href="#"><i className="bi bi-house me-3"></i>Home </a>
                                    <a className="dropdown-item" href="#"><i className="bi bi-pencil me-3"></i>Edit profile</a>
                                    <div className="dropdown-divider">
                                    </div>
                                    <a className="dropdown-item" href="#"><i className="bi bi-gear me-3"></i>Settings </a>
                                    <a className="dropdown-item" href="#"><i className="bi bi-image me-3"></i>Media </a>
                                    <a className="dropdown-item" href="#"><i className="bi bi-box-arrow-up me-3"></i>Share</a>
                                    <div className="dropdown-divider">
                                    </div>
                                    <a className="dropdown-item" href="#">
                                        <i className="bi bi-person me-3"></i>Login</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-fill overflow-y-lg-auto scrollbar bg-body rounded-top-4 rounded-top-start-lg-4 rounded-top-end-lg-0 border-top border-lg shadow-2">
                        {/* <main className="container-fluid px-3 py-5 p-lg-6 p-xxl-8"> */}
                        <div className="mb-6 mb-xl-10">
                            <div className="row g-3 align-items-center">
                                <div className="col"><h1 className="ls-tight">Hello Shaikh &#128075;,</h1>
                                </div>
                                <div className="col">
                                    <div className="hstack gap-2 justify-content-end">
                                        <button type="button" style={{background:'#000', padding:'11px', color:"#fff"}} className="btn btn-sm btn-square btn-neutral rounded-circle d-xxl-none" data-bs-toggle="offcanvas" data-bs-target="#responsiveOffcanvas" aria-controls="responsiveOffcanvas">
                                            Status<i className="bi bi-three-dots"></i>
                                        </button>
                                        <button type="button" className="btn btn-sm btn-neutral d-none d-sm-inline-flex" data-bs-target="#depositLiquidityModal" data-bs-toggle="modal">
                                            <span className="pe-2"><i className="bi bi-plus-circle"></i> </span><span>Liquidity</span>
                                        </button>
                                        <a href="/pages/page-overview.html" className="btn d-inline-flex btn-sm btn-dark"><span>Trade</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal fade" id="cryptoModal" tabindex="-1" aria-labelledby="cryptoModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content overflow-hidden">
                                    <div className="modal-header pb-0 border-0">
                                        <h1 className="modal-title h4" id="cryptoModalLabel">Select token</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body p-0">
                                        <div className="px-6 py-5 border-bottom">
                                            <input type="text" className="form-control" placeholder="Search token or paste address" aria-label="Search" />
                                        </div>
                                        <div className="p-2">
                                            <div className="vstack">
                                                <div className="position-relative d-flex gap-3 p-4 rounded bg-body-secondary-hover">
                                                    <div className="icon flex-none">
                                                        <img src="../../img/crypto/color/btc.svg" className="w-rem-10 h-rem-10" alt="..." />
                                                    </div>
                                                    <div className="d-flex flex-fill">
                                                        <div className="">
                                                            <a href="#" className="stretched-link text-heading fw-bold">BTC</a>
                                                            <span className="d-block text-muted text-sm">Bitcoin</span>
                                                        </div>
                                                        <div className="ms-auto fw-bold text-heading">23.8</div>
                                                    </div>
                                                </div>
                                                <div className="position-relative d-flex gap-3 p-4 rounded bg-body-secondary-hover">
                                                    <div className="icon flex-none">
                                                        <img src="../../img/crypto/color/eth.svg" className="w-rem-10 h-rem-10" alt="..." />
                                                    </div>
                                                    <div className="d-flex flex-fill">
                                                        <div className="">
                                                            <a href="#" className="stretched-link text-heading fw-bold">ETH</a>
                                                            <span className="d-block text-muted text-sm">Ethereum</span>
                                                        </div>
                                                        <div className="ms-auto fw-bold text-heading">1.200,50</div>
                                                    </div>
                                                </div>
                                                <div className="position-relative d-flex gap-3 p-4 rounded bg-body-secondary-hover">
                                                    <div className="icon flex-none">
                                                        <img src='../../img' className="w-rem-10 h-rem-10" alt="..." />
                                                    </div>
                                                    <div className="d-flex flex-fill">
                                                        <div className="">
                                                            <a href="#" className="stretched-link text-heading fw-bold">ADA</a>
                                                            <span className="d-block text-muted text-sm">Cardano</span>
                                                        </div>
                                                        <div className="ms-auto fw-bold text-heading">10.930,00</div>
                                                    </div>
                                                </div>
                                                <div className="position-relative d-flex gap-3 p-4 rounded bg-body-secondary-hover">
                                                    <div className="icon flex-none">
                                                        <img src="../../img/crypto/color/bnb.svg" className="w-rem-10 h-rem-10" alt="..." />
                                                    </div>
                                                    <div className="d-flex flex-fill">
                                                        <div className="">
                                                            <a href="#" className="stretched-link text-heading fw-bold">BNB</a>
                                                            <span className="d-block text-muted text-sm">Binance</span>
                                                        </div>
                                                        <div className="ms-auto fw-bold text-heading">200</div>
                                                    </div>
                                                </div>
                                                <div className="position-relative d-flex gap-3 p-4 rounded bg-body-secondary-hover">
                                                    <div className="icon flex-none">
                                                        <img src="../../img/crypto/color/chain.svg" className="w-rem-10 h-rem-10" alt="..." />
                                                    </div>
                                                    <div className="d-flex flex-fill">
                                                        <div className="">
                                                            <a href="#" className="stretched-link text-heading fw-bold">CHAIN</a>
                                                            <span className="d-block text-muted text-sm">Linkchain</span>
                                                        </div>
                                                        <div className="ms-auto fw-bold text-heading">200</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="px-6 py-5 bg-body-secondary d-flex justify-content-center">
                                            <button className="btn btn-sm btn-dark">
                                                <i className="bi bi-gear me-2"></i>Manage tokens
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row g-3 g-xxl-6">
                            <div className="col-xxl-8">
                                <div className="vstack gap-3 gap-md-6">
                                    <div className="row g-3">
                                        <div className="col-md col-sm-6">
                                            <div className="card border-primary-hover">
                                                <div className="card-body p-4">
                                                    <div className="d-flex align-items-center gap-2">
                                                        <img style={{ width: '25%' }} src={img2} className="w-rem-5 flex-none" alt="..." />
                                                        <a href="/pages/page-details.html" className="h6 stretched-link">BTC</a>
                                                    </div>
                                                    <div className="text-sm fw-semibold mt-3">3.2893 USDT</div>
                                                    <div className="d-flex align-items-center gap-2 mt-1 text-xs">
                                                        <span className="badge badge-xs bg-success">
                                                            <i className="bi bi-arrow-up-right"></i>
                                                        </span>
                                                        <span>+13.7%</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md col-sm-6">
                                            <div className="card border-primary-hover">
                                                <div className="card-body p-4">
                                                    <div className="d-flex align-items-center gap-2">
                                                        <img style={{ width: '25%' }} src={img3} className="w-rem-5 flex-none" alt="..." />
                                                        <a href="/pages/page-details.html" className="h6 stretched-link">ADA</a>
                                                    </div>
                                                    <div className="text-sm fw-semibold mt-3">10.745,49 ADA</div>
                                                    <div className="d-flex align-items-center gap-2 mt-1 text-xs">
                                                        <span className="badge badge-xs bg-danger">
                                                            <i className="bi bi-arrow-up-right"></i>
                                                        </span>
                                                        <span>-3.2%</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md col-sm-6">
                                            <div className="card border-primary-hover">
                                                <div className="card-body p-4">
                                                    <div className="d-flex align-items-center gap-2">
                                                        <img style={{ width: '25%' }} src={img5} className="w-rem-5 flex-none" alt="..." />
                                                        <a href="/pages/page-details.html" className="h6 stretched-link">EOS</a>
                                                    </div>
                                                    <div className="text-sm fw-semibold mt-3">7.890,00 EOS</div>
                                                    <div className="d-flex align-items-center gap-2 mt-1 text-xs">
                                                        <span className="badge badge-xs bg-danger">
                                                            <i className="bi bi-arrow-up-right"></i> </span>
                                                        <span>-2.2%</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-1 d-none d-md-block">
                                            <div className="card h-md-100 d-flex flex-column align-items-center justify-content-center py-4 bg-body-secondary bg-opacity-75 bg-opacity-100-hover">
                                                <a href="#cryptoModal" className="stretched-link text-body-secondary" data-bs-toggle="modal">
                                                    <i className="bi bi-plus-lg"></i>Click</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-body pb-0">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div>
                                                    <h1>Overview</h1>
                                                    <br/>
                                                    <h5>Earnings</h5>
                                                </div>
                                                <div className="hstack align-items-center">
                                                    <a href="#" className="text-muted">
                                                        <i className="bi bi-arrow-repeat"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="mx-n4">
                                                <div id="chart-users" data-height="270" style={{ minHeight: "285px" }}>
                                                    <div id="apexcharts4yic26qp" className="apexcharts-canvas apexcharts4yic26qp apexcharts-theme-light" style={{ width: "794px", height: "270px" }}>
                                                        <svg id="SvgjsSvg1196" width="794" height="270" xmlns="http://www.w3.org/2000/svg" version="1.1" xlink="http://www.w3.org/1999/xlink" svgjs="http://svgjs.dev" className="apexcharts-svg" data="ApexChartsNS" transform="translate(0, 0)" style={{ background: "transparent" }}>
                                                            <foreignObject x="0" y="0" width="794" height="270">
                                                                <div className="apexcharts-legend" xmlns="http://www.w3.org/1999/xhtml" style={{ maxHeight: "135px" }}>
                                                                </div>
                                                            </foreignObject>
                                                            <g id="SvgjsG1267" className="apexcharts-yaxis" rel="0" transform="translate(11.207812309265137, 0)">
                                                                <g id="SvgjsG1268" className="apexcharts-yaxis-texts-g">
                                                                    <text id="SvgjsText1270" font-family="system-ui,-apple-system,&quot;Segoe UI&quot;,Roboto,&quot;Helvetica Neue&quot;,&quot;Noto Sans&quot;,&quot;Liberation Sans&quot;,Arial,sans-serif,&quot;Apple Color Emoji&quot;,&quot;Segoe UI Emoji&quot;,&quot;Segoe UI Symbol&quot;,&quot;Noto Color Emoji&quot;" x="20" y="31.4" text-anchor="end" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#1e293b" className="apexcharts-text apexcharts-yaxis-label apexcharts-xaxis-label" style={{ fontFamily: "system-ui, -apple-system, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, &quot;Noto Sans&quot;, &quot;Liberation Sans&quot;, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;" }}>
                                                                        <tspan id="SvgjsTspan1271">32</tspan>
                                                                        <title>32</title>
                                                                    </text>
                                                                    <text id="SvgjsText1273" font-family="system-ui,-apple-system,&quot;Segoe UI&quot;,Roboto,&quot;Helvetica Neue&quot;,&quot;Noto Sans&quot;,&quot;Liberation Sans&quot;,Arial,sans-serif,&quot;Apple Color Emoji&quot;,&quot;Segoe UI Emoji&quot;,&quot;Segoe UI Symbol&quot;,&quot;Noto Color Emoji&quot;" x="20" y="80.5307998456955" text-anchor="end" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#1e293b" className="apexcharts-text apexcharts-yaxis-label apexcharts-xaxis-label" style={{ fontFamily: "system-ui, -apple-system, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, &quot;Noto Sans&quot;, &quot;Liberation Sans&quot;, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;" }}>
                                                                        <tspan id="SvgjsTspan1274">24</tspan>
                                                                        <title>24</title></text>
                                                                    <text id="SvgjsText1276" font-family="system-ui,-apple-system,&quot;Segoe UI&quot;,Roboto,&quot;Helvetica Neue&quot;,&quot;Noto Sans&quot;,&quot;Liberation Sans&quot;,Arial,sans-serif,&quot;Apple Color Emoji&quot;,&quot;Segoe UI Emoji&quot;,&quot;Segoe UI Symbol&quot;,&quot;Noto Color Emoji&quot;" x="20" y="129.661599691391" text-anchor="end" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#1e293b" className="apexcharts-text apexcharts-yaxis-label apexcharts-xaxis-label" style={{ fontFamily: "system-ui, -apple-system, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, &quot;Noto Sans&quot;, &quot;Liberation Sans&quot;, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;" }}>
                                                                        <tspan id="SvgjsTspan1277">16</tspan>
                                                                        <title>16</title>
                                                                    </text>
                                                                    <text id="SvgjsText1279" font-family="system-ui,-apple-system,&quot;Segoe UI&quot;,Roboto,&quot;Helvetica Neue&quot;,&quot;Noto Sans&quot;,&quot;Liberation Sans&quot;,Arial,sans-serif,&quot;Apple Color Emoji&quot;,&quot;Segoe UI Emoji&quot;,&quot;Segoe UI Symbol&quot;,&quot;Noto Color Emoji&quot;" x="20" y="178.79239953708648" text-anchor="end" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#1e293b" className="apexcharts-text apexcharts-yaxis-label apexcharts-xaxis-label" style={{ fontFamily: "system-ui, -apple-system, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, &quot;Noto Sans&quot;, &quot;Liberation Sans&quot;, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;" }}>
                                                                        <tspan id="SvgjsTspan1280">8</tspan>
                                                                        <title>8</title>
                                                                    </text>
                                                                    <text id="SvgjsText1282" font-family="system-ui,-apple-system,&quot;Segoe UI&quot;,Roboto,&quot;Helvetica Neue&quot;,&quot;Noto Sans&quot;,&quot;Liberation Sans&quot;,Arial,sans-serif,&quot;Apple Color Emoji&quot;,&quot;Segoe UI Emoji&quot;,&quot;Segoe UI Symbol&quot;,&quot;Noto Color Emoji&quot;" x="20" y="227.92319938278197" text-anchor="end" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#1e293b" className="apexcharts-text apexcharts-yaxis-label apexcharts-xaxis-label" style={{ fontFamily: "system-ui, -apple-system, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, &quot;Noto Sans&quot;, &quot;Liberation Sans&quot;, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;" }}>
                                                                        <tspan id="SvgjsTspan1283">0</tspan>
                                                                        <title>0</title>
                                                                    </text>
                                                                </g>
                                                            </g>
                                                            <g id="SvgjsG1198" className="apexcharts-inner apexcharts-graphical" transform="translate(41.20781230926514, 30)"><defs id="SvgjsDefs1197">
                                                                <linearGradient id="SvgjsLinearGradient1201" x1="0" y1="0" x2="0" y2="1">
                                                                    <stop id="SvgjsStop1202" stop-opacity="0.4" stop-color="rgba(216,227,240,0.4)" offset="0"></stop>
                                                                    <stop id="SvgjsStop1203" stop-opacity="0.5" stop-color="rgba(190,209,230,0.5)" offset="1"></stop>
                                                                    <stop id="SvgjsStop1204" stop-opacity="0.5" stop-color="rgba(190,209,230,0.5)" offset="1"></stop>
                                                                </linearGradient>
                                                                <clipPath id="gridRectMask4yic26qp"><rect id="SvgjsRect1206" width="748.7921876907349" height="198.52319938278197" x="-3" y="-1" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect>
                                                                </clipPath><clipPath id="forecastMask4yic26qp"></clipPath><clipPath id="nonForecastMask4yic26qp"></clipPath>
                                                                <clipPath id="gridRectMarkerMask4yic26qp"><rect id="SvgjsRect1207" width="746.7921876907349" height="200.52319938278197" x="-2" y="-2" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath></defs>
                                                                <rect id="SvgjsRect1205" width="23" height="196.52319938278197" x="0" y="0" rx="0" ry="0" opacity="1" stroke-width="0" stroke-dasharray="3" fill="url(#SvgjsLinearGradient1201)" className="apexcharts-xcrosshairs" y2="196.52319938278197" filter="none" fill-opacity="0.9"></rect>
                                                                <g id="SvgjsG1228" className="apexcharts-grid">
                                                                    <g id="SvgjsG1229" className="apexcharts-gridlines-horizontal">
                                                                        <line id="SvgjsLine1233" x1="0" y1="49.13079984569549" x2="742.7921876907349" y2="49.13079984569549" stroke="#e2e8f0" stroke-dasharray="3" stroke-linecap="butt" className="apexcharts-gridline"></line><line id="SvgjsLine1234" x1="0" y1="98.26159969139098" x2="742.7921876907349" y2="98.26159969139098" stroke="#e2e8f0" stroke-dasharray="3" stroke-linecap="butt" className="apexcharts-gridline"></line><line id="SvgjsLine1235" x1="0" y1="147.39239953708648" x2="742.7921876907349" y2="147.39239953708648" stroke="#e2e8f0" stroke-dasharray="3" stroke-linecap="butt" className="apexcharts-gridline"></line></g>
                                                                    <g id="SvgjsG1230" className="apexcharts-gridlines-vertical"></g><line id="SvgjsLine1238" x1="0" y1="196.52319938278197" x2="742.7921876907349" y2="196.52319938278197" stroke="transparent" stroke-dasharray="0" stroke-linecap="butt"></line>
                                                                    <line id="SvgjsLine1237" x1="0" y1="1" x2="0" y2="196.52319938278197" stroke="transparent" stroke-dasharray="0" stroke-linecap="butt"></line></g>
                                                                <g id="SvgjsG1231" className="apexcharts-grid-borders">
                                                                    <line id="SvgjsLine1232" x1="0" y1="0" x2="742.7921876907349" y2="0" stroke="#e2e8f0" stroke-dasharray="3" stroke-linecap="butt" className="apexcharts-gridline"></line>
                                                                    <line id="SvgjsLine1236" x1="0" y1="196.52319938278197" x2="742.7921876907349" y2="196.52319938278197" stroke="#e2e8f0" stroke-dasharray="3" stroke-linecap="butt" className="apexcharts-gridline"></line></g>
                                                                <g id="SvgjsG1208" className="apexcharts-bar-series apexcharts-plot-series">
                                                                    <g id="SvgjsG1209" className="apexcharts-series" seriesName="Revenue" rel="1" realIndex="0">
                                                                        <path id="SvgjsPath1213" d="M 34.92451173067093 196.52419938278197 L 34.92451173067093 14.283699961423872 C 34.92451173067093 13.283699961423872 35.92451173067093 12.283699961423872 36.92451173067093 12.283699961423872 L 53.92451173067093 12.283699961423872 C 54.92451173067093 12.283699961423872 55.92451173067093 13.283699961423872 55.92451173067093 14.283699961423872 L 55.92451173067093 196.52419938278197 z " fill="rgba(137,87,255,0.85)" fill-opacity="1" stroke="transparent" stroke-opacity="1" stroke-linecap="round" stroke-width="2" stroke-dasharray="0" className="apexcharts-bar-area" index="0" clip-path="url(#gridRectMask4yic26qp)" pathTo="M 34.92451173067093 196.52419938278197 L 34.92451173067093 14.283699961423872 C 34.92451173067093 13.283699961423872 35.92451173067093 12.283699961423872 36.92451173067093 12.283699961423872 L 53.92451173067093 12.283699961423872 C 54.92451173067093 12.283699961423872 55.92451173067093 13.283699961423872 55.92451173067093 14.283699961423872 L 55.92451173067093 196.52419938278197 z " pathFrom="M 34.92451173067093 196.52419938278197 L 34.92451173067093 196.52419938278197 L 55.92451173067093 196.52419938278197 L 55.92451173067093 196.52419938278197 L 55.92451173067093 196.52419938278197 L 55.92451173067093 196.52419938278197 L 55.92451173067093 196.52419938278197 L 34.92451173067093 196.52419938278197 z" cy="12.282699961423873" cx="126.77353519201279" j="0" val="30" barHeight="184.2404994213581" barWidth="23"></path>
                                                                        <path id="SvgjsPath1215" d="M 127.77353519201279 196.52419938278197 L 127.77353519201279 137.1106995756626 C 127.77353519201279 136.1106995756626 128.7735351920128 135.1106995756626 129.7735351920128 135.1106995756626 L 146.7735351920128 135.1106995756626 C 147.7735351920128 135.1106995756626 148.7735351920128 136.1106995756626 148.7735351920128 137.1106995756626 L 148.7735351920128 196.52419938278197 z " fill="rgba(137,87,255,0.85)" fill-opacity="1" stroke="transparent" stroke-opacity="1" stroke-linecap="round" stroke-width="2" stroke-dasharray="0" className="apexcharts-bar-area" index="0" clip-path="url(#gridRectMask4yic26qp)" pathTo="M 127.77353519201279 196.52419938278197 L 127.77353519201279 137.1106995756626 C 127.77353519201279 136.1106995756626 128.7735351920128 135.1106995756626 129.7735351920128 135.1106995756626 L 146.7735351920128 135.1106995756626 C 147.7735351920128 135.1106995756626 148.7735351920128 136.1106995756626 148.7735351920128 137.1106995756626 L 148.7735351920128 196.52419938278197 z " pathFrom="M 127.77353519201279 196.52419938278197 L 127.77353519201279 196.52419938278197 L 148.7735351920128 196.52419938278197 L 148.7735351920128 196.52419938278197 L 148.7735351920128 196.52419938278197 L 148.7735351920128 196.52419938278197 L 148.7735351920128 196.52419938278197 L 127.77353519201279 196.52419938278197 z" cy="135.1096995756626" cx="219.62255865335464" j="1" val="10" barHeight="61.413499807119365" barWidth="23"></path>
                                                                        <path id="SvgjsPath1217" d="M 220.62255865335464 196.52419938278197 L 220.62255865335464 75.69719976854324 C 220.62255865335464 74.69719976854324 221.62255865335464 73.69719976854324 222.62255865335464 73.69719976854324 L 239.62255865335464 73.69719976854324 C 240.62255865335464 73.69719976854324 241.62255865335464 74.69719976854324 241.62255865335464 75.69719976854324 L 241.62255865335464 196.52419938278197 z " fill="rgba(137,87,255,0.85)" fill-opacity="1" stroke="transparent" stroke-opacity="1" stroke-linecap="round" stroke-width="2" stroke-dasharray="0" className="apexcharts-bar-area" index="0" clip-path="url(#gridRectMask4yic26qp)" pathTo="M 220.62255865335464 196.52419938278197 L 220.62255865335464 75.69719976854324 C 220.62255865335464 74.69719976854324 221.62255865335464 73.69719976854324 222.62255865335464 73.69719976854324 L 239.62255865335464 73.69719976854324 C 240.62255865335464 73.69719976854324 241.62255865335464 74.69719976854324 241.62255865335464 75.69719976854324 L 241.62255865335464 196.52419938278197 z " pathFrom="M 220.62255865335464 196.52419938278197 L 220.62255865335464 196.52419938278197 L 241.62255865335464 196.52419938278197 L 241.62255865335464 196.52419938278197 L 241.62255865335464 196.52419938278197 L 241.62255865335464 196.52419938278197 L 241.62255865335464 196.52419938278197 L 220.62255865335464 196.52419938278197 z" cy="73.69619976854324" cx="312.4715821146965" j="2" val="20" barHeight="122.82699961423873" barWidth="23"></path>
                                                                        <path id="SvgjsPath1219" d="M 313.4715821146965 196.52419938278197 L 313.4715821146965 137.1106995756626 C 313.4715821146965 136.1106995756626 314.4715821146965 135.1106995756626 315.4715821146965 135.1106995756626 L 332.4715821146965 135.1106995756626 C 333.4715821146965 135.1106995756626 334.4715821146965 136.1106995756626 334.4715821146965 137.1106995756626 L 334.4715821146965 196.52419938278197 z " fill="rgba(137,87,255,0.85)" fill-opacity="1" stroke="transparent" stroke-opacity="1" stroke-linecap="round" stroke-width="2" stroke-dasharray="0" className="apexcharts-bar-area" index="0" clip-path="url(#gridRectMask4yic26qp)" pathTo="M 313.4715821146965 196.52419938278197 L 313.4715821146965 137.1106995756626 C 313.4715821146965 136.1106995756626 314.4715821146965 135.1106995756626 315.4715821146965 135.1106995756626 L 332.4715821146965 135.1106995756626 C 333.4715821146965 135.1106995756626 334.4715821146965 136.1106995756626 334.4715821146965 137.1106995756626 L 334.4715821146965 196.52419938278197 z " pathFrom="M 313.4715821146965 196.52419938278197 L 313.4715821146965 196.52419938278197 L 334.4715821146965 196.52419938278197 L 334.4715821146965 196.52419938278197 L 334.4715821146965 196.52419938278197 L 334.4715821146965 196.52419938278197 L 334.4715821146965 196.52419938278197 L 313.4715821146965 196.52419938278197 z" cy="135.1096995756626" cx="405.32060557603836" j="3" val="10" barHeight="61.413499807119365" barWidth="23"></path>
                                                                        <path id="SvgjsPath1221" d="M 406.32060557603836 196.52419938278197 L 406.32060557603836 94.12124971067905 C 406.32060557603836 93.12124971067905 407.32060557603836 92.12124971067905 408.32060557603836 92.12124971067905 L 425.32060557603836 92.12124971067905 C 426.32060557603836 92.12124971067905 427.32060557603836 93.12124971067905 427.32060557603836 94.12124971067905 L 427.32060557603836 196.52419938278197 z " fill="rgba(137,87,255,0.85)" fill-opacity="1" stroke="transparent" stroke-opacity="1" stroke-linecap="round" stroke-width="2" stroke-dasharray="0" className="apexcharts-bar-area" index="0" clip-path="url(#gridRectMask4yic26qp)" pathTo="M 406.32060557603836 196.52419938278197 L 406.32060557603836 94.12124971067905 C 406.32060557603836 93.12124971067905 407.32060557603836 92.12124971067905 408.32060557603836 92.12124971067905 L 425.32060557603836 92.12124971067905 C 426.32060557603836 92.12124971067905 427.32060557603836 93.12124971067905 427.32060557603836 94.12124971067905 L 427.32060557603836 196.52419938278197 z " pathFrom="M 406.32060557603836 196.52419938278197 L 406.32060557603836 196.52419938278197 L 427.32060557603836 196.52419938278197 L 427.32060557603836 196.52419938278197 L 427.32060557603836 196.52419938278197 L 427.32060557603836 196.52419938278197 L 427.32060557603836 196.52419938278197 L 406.32060557603836 196.52419938278197 z" cy="92.12024971067905" cx="498.1696290373802" j="4" val="17" barHeight="104.40294967210292" barWidth="23"></path>
                                                                        <path id="SvgjsPath1223" d="M 499.1696290373802 196.52419938278197 L 499.1696290373802 124.82799961423873 C 499.1696290373802 123.82799961423873 500.1696290373802 122.82799961423873 501.1696290373802 122.82799961423873 L 518.1696290373802 122.82799961423873 C 519.1696290373802 122.82799961423873 520.1696290373802 123.82799961423873 520.1696290373802 124.82799961423873 L 520.1696290373802 196.52419938278197 z " fill="rgba(137,87,255,0.85)" fill-opacity="1" stroke="transparent" stroke-opacity="1" stroke-linecap="round" stroke-width="2" stroke-dasharray="0" className="apexcharts-bar-area" index="0" clip-path="url(#gridRectMask4yic26qp)" pathTo="M 499.1696290373802 196.52419938278197 L 499.1696290373802 124.82799961423873 C 499.1696290373802 123.82799961423873 500.1696290373802 122.82799961423873 501.1696290373802 122.82799961423873 L 518.1696290373802 122.82799961423873 C 519.1696290373802 122.82799961423873 520.1696290373802 123.82799961423873 520.1696290373802 124.82799961423873 L 520.1696290373802 196.52419938278197 z " pathFrom="M 499.1696290373802 196.52419938278197 L 499.1696290373802 196.52419938278197 L 520.1696290373802 196.52419938278197 L 520.1696290373802 196.52419938278197 L 520.1696290373802 196.52419938278197 L 520.1696290373802 196.52419938278197 L 520.1696290373802 196.52419938278197 L 499.1696290373802 196.52419938278197 z" cy="122.82699961423873" cx="591.0186524987221" j="5" val="12" barHeight="73.69619976854324" barWidth="23"></path>
                                                                        <path id="SvgjsPath1225" d="M 592.0186524987221 196.52419938278197 L 592.0186524987221 149.39339953708648 C 592.0186524987221 148.39339953708648 593.0186524987221 147.39339953708648 594.0186524987221 147.39339953708648 L 611.0186524987221 147.39339953708648 C 612.0186524987221 147.39339953708648 613.0186524987221 148.39339953708648 613.0186524987221 149.39339953708648 L 613.0186524987221 196.52419938278197 z " fill="rgba(137,87,255,0.85)" fill-opacity="1" stroke="transparent" stroke-opacity="1" stroke-linecap="round" stroke-width="2" stroke-dasharray="0" className="apexcharts-bar-area" index="0" clip-path="url(#gridRectMask4yic26qp)" pathTo="M 592.0186524987221 196.52419938278197 L 592.0186524987221 149.39339953708648 C 592.0186524987221 148.39339953708648 593.0186524987221 147.39339953708648 594.0186524987221 147.39339953708648 L 611.0186524987221 147.39339953708648 C 612.0186524987221 147.39339953708648 613.0186524987221 148.39339953708648 613.0186524987221 149.39339953708648 L 613.0186524987221 196.52419938278197 z " pathFrom="M 592.0186524987221 196.52419938278197 L 592.0186524987221 196.52419938278197 L 613.0186524987221 196.52419938278197 L 613.0186524987221 196.52419938278197 L 613.0186524987221 196.52419938278197 L 613.0186524987221 196.52419938278197 L 613.0186524987221 196.52419938278197 L 592.0186524987221 196.52419938278197 z" cy="147.39239953708648" cx="683.8676759600639" j="6" val="8" barHeight="49.13079984569549" barWidth="23"></path>
                                                                        <path id="SvgjsPath1227" d="M 684.8676759600639 196.52419938278197 L 684.8676759600639 75.69719976854324 C 684.8676759600639 74.69719976854324 685.8676759600639 73.69719976854324 686.8676759600639 73.69719976854324 L 703.8676759600639 73.69719976854324 C 704.8676759600639 73.69719976854324 705.8676759600639 74.69719976854324 705.8676759600639 75.69719976854324 L 705.8676759600639 196.52419938278197 z " fill="rgba(137,87,255,0.85)" fill-opacity="1" stroke="transparent" stroke-opacity="1" stroke-linecap="round" stroke-width="2" stroke-dasharray="0" className="apexcharts-bar-area" index="0" clip-path="url(#gridRectMask4yic26qp)" pathTo="M 684.8676759600639 196.52419938278197 L 684.8676759600639 75.69719976854324 C 684.8676759600639 74.69719976854324 685.8676759600639 73.69719976854324 686.8676759600639 73.69719976854324 L 703.8676759600639 73.69719976854324 C 704.8676759600639 73.69719976854324 705.8676759600639 74.69719976854324 705.8676759600639 75.69719976854324 L 705.8676759600639 196.52419938278197 z " pathFrom="M 684.8676759600639 196.52419938278197 L 684.8676759600639 196.52419938278197 L 705.8676759600639 196.52419938278197 L 705.8676759600639 196.52419938278197 L 705.8676759600639 196.52419938278197 L 705.8676759600639 196.52419938278197 L 705.8676759600639 196.52419938278197 L 684.8676759600639 196.52419938278197 z" cy="73.69619976854324" cx="776.7166994214058" j="7" val="20" barHeight="122.82699961423873" barWidth="23"></path>
                                                                        <g id="SvgjsG1211" class="apexcharts-bar-goals-markers">
                                                                            <g id="SvgjsG1212" className="apexcharts-bar-goals-groups" class="apexcharts-hidden-element-shown" clip-path="url(#gridRectMarkerMask4yic26qp)"></g>
                                                                            <g id="SvgjsG1214" className="apexcharts-bar-goals-groups" class="apexcharts-hidden-element-shown" clip-path="url(#gridRectMarkerMask4yic26qp)"></g>
                                                                            <g id="SvgjsG1216" className="apexcharts-bar-goals-groups" class="apexcharts-hidden-element-shown" clip-path="url(#gridRectMarkerMask4yic26qp)"></g>
                                                                            <g id="SvgjsG1218" className="apexcharts-bar-goals-groups" class="apexcharts-hidden-element-shown" clip-path="url(#gridRectMarkerMask4yic26qp)"></g>
                                                                            <g id="SvgjsG1220" className="apexcharts-bar-goals-groups" class="apexcharts-hidden-element-shown" clip-path="url(#gridRectMarkerMask4yic26qp)"></g>
                                                                            <g id="SvgjsG1222" className="apexcharts-bar-goals-groups" class="apexcharts-hidden-element-shown" clip-path="url(#gridRectMarkerMask4yic26qp)"></g>
                                                                            <g id="SvgjsG1224" className="apexcharts-bar-goals-groups" class="apexcharts-hidden-element-shown" clip-path="url(#gridRectMarkerMask4yic26qp)"></g>
                                                                            <g id="SvgjsG1226" className="apexcharts-bar-goals-groups" class="apexcharts-hidden-element-shown" clip-path="url(#gridRectMarkerMask4yic26qp)"></g>
                                                                        </g>
                                                                    </g>
                                                                    <g id="SvgjsG1210" className="apexcharts-datalabels" realIndex="0"></g>
                                                                </g>
                                                                <line id="SvgjsLine1239" x1="0" y1="0" x2="742.7921876907349" y2="0" stroke="#b6b6b6" stroke-dasharray="0" stroke-width="1" stroke-linecap="butt" className="apexcharts-ycrosshairs"></line>
                                                                <line id="SvgjsLine1240" x1="0" y1="0" x2="742.7921876907349" y2="0" stroke-dasharray="0" stroke-width="0" stroke-linecap="butt" className="apexcharts-ycrosshairs-hidden"></line>
                                                                <g id="SvgjsG1241" className="apexcharts-xaxis" transform="translate(0, 0)">
                                                                    <g id="SvgjsG1242" className="apexcharts-xaxis-texts-g" transform="translate(0, -4)"><text id="SvgjsText1244" font-family="system-ui,-apple-system,&quot;Segoe UI&quot;,Roboto,&quot;Helvetica Neue&quot;,&quot;Noto Sans&quot;,&quot;Liberation Sans&quot;,Arial,sans-serif,&quot;Apple Color Emoji&quot;,&quot;Segoe UI Emoji&quot;,&quot;Segoe UI Symbol&quot;,&quot;Noto Color Emoji&quot;" x="46.42451173067093" y="225.52319938278197" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#1e293b" className="apexcharts-text apexcharts-xaxis-label apexcharts-xaxis-label" style={{ fontFamily: "system-ui, -apple-system, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, &quot;Noto Sans&quot;, &quot;Liberation Sans&quot;, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;" }}>
                                                                        <tspan id="SvgjsTspan1245">May</tspan>
                                                                        <title>May</title></text>
                                                                        <text id="SvgjsText1247" font-family="system-ui,-apple-system,&quot;Segoe UI&quot;,Roboto,&quot;Helvetica Neue&quot;,&quot;Noto Sans&quot;,&quot;Liberation Sans&quot;,Arial,sans-serif,&quot;Apple Color Emoji&quot;,&quot;Segoe UI Emoji&quot;,&quot;Segoe UI Symbol&quot;,&quot;Noto Color Emoji&quot;" x="139.2735351920128" y="225.52319938278197" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#1e293b" className="apexcharts-text apexcharts-xaxis-label apexcharts-xaxis-label" style={{ fontFamily: "system-ui, -apple-system, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, &quot;Noto Sans&quot;, &quot;Liberation Sans&quot;, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;" }}>
                                                                            <tspan id="SvgjsTspan1248">Jun</tspan>
                                                                            <title>Jun</title></text>
                                                                        <text id="SvgjsText1250" font-family="system-ui,-apple-system,&quot;Segoe UI&quot;,Roboto,&quot;Helvetica Neue&quot;,&quot;Noto Sans&quot;,&quot;Liberation Sans&quot;,Arial,sans-serif,&quot;Apple Color Emoji&quot;,&quot;Segoe UI Emoji&quot;,&quot;Segoe UI Symbol&quot;,&quot;Noto Color Emoji&quot;" x="232.12255865335464" y="225.52319938278197" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#1e293b" className="apexcharts-text apexcharts-xaxis-label apexcharts-xaxis-label" style={{ fontFamily: "system-ui, -apple-system, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, &quot;Noto Sans&quot;, &quot;Liberation Sans&quot;, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;" }}>
                                                                            <tspan id="SvgjsTspan1251">Jul</tspan>
                                                                            <title>Jul</title></text>
                                                                        <text id="SvgjsText1253" font-family="system-ui,-apple-system,&quot;Segoe UI&quot;,Roboto,&quot;Helvetica Neue&quot;,&quot;Noto Sans&quot;,&quot;Liberation Sans&quot;,Arial,sans-serif,&quot;Apple Color Emoji&quot;,&quot;Segoe UI Emoji&quot;,&quot;Segoe UI Symbol&quot;,&quot;Noto Color Emoji&quot;" x="324.9715821146965" y="225.52319938278197" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#1e293b" className="apexcharts-text apexcharts-xaxis-label apexcharts-xaxis-label" style={{ fontFamily: "system-ui, -apple-system, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, &quot;Noto Sans&quot;, &quot;Liberation Sans&quot;, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;" }}>
                                                                            <tspan id="SvgjsTspan1254">Aug</tspan>
                                                                            <title>Aug</title></text>
                                                                        <text id="SvgjsText1256" font-family="system-ui,-apple-system,&quot;Segoe UI&quot;,Roboto,&quot;Helvetica Neue&quot;,&quot;Noto Sans&quot;,&quot;Liberation Sans&quot;,Arial,sans-serif,&quot;Apple Color Emoji&quot;,&quot;Segoe UI Emoji&quot;,&quot;Segoe UI Symbol&quot;,&quot;Noto Color Emoji&quot;" x="417.82060557603836" y="225.52319938278197" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#1e293b" className="apexcharts-text apexcharts-xaxis-label apexcharts-xaxis-label" style={{ fontFamily: "system-ui, -apple-system, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, &quot;Noto Sans&quot;, &quot;Liberation Sans&quot;, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;" }}>
                                                                            <tspan id="SvgjsTspan1257">Sep</tspan>
                                                                            <title>Sep</title> </text>
                                                                        <text id="SvgjsText1259" font-family="system-ui,-apple-system,&quot;Segoe UI&quot;,Roboto,&quot;Helvetica Neue&quot;,&quot;Noto Sans&quot;,&quot;Liberation Sans&quot;,Arial,sans-serif,&quot;Apple Color Emoji&quot;,&quot;Segoe UI Emoji&quot;,&quot;Segoe UI Symbol&quot;,&quot;Noto Color Emoji&quot;" x="510.6696290373802" y="225.52319938278197" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#1e293b" className="apexcharts-text apexcharts-xaxis-label apexcharts-xaxis-label" style={{ fontFamily: "system-ui, -apple-system, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, &quot;Noto Sans&quot;, &quot;Liberation Sans&quot;, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;" }}>
                                                                            <tspan id="SvgjsTspan1260">Oct</tspan>
                                                                            <title>Oct</title>
                                                                        </text>
                                                                        <text id="SvgjsText1262" font-family="system-ui,-apple-system,&quot;Segoe UI&quot;,Roboto,&quot;Helvetica Neue&quot;,&quot;Noto Sans&quot;,&quot;Liberation Sans&quot;,Arial,sans-serif,&quot;Apple Color Emoji&quot;,&quot;Segoe UI Emoji&quot;,&quot;Segoe UI Symbol&quot;,&quot;Noto Color Emoji&quot;" x="603.5186524987221" y="225.52319938278197" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#1e293b" className="apexcharts-text apexcharts-xaxis-label apexcharts-xaxis-label" style={{ fontFamily: "system-ui, -apple-system, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, &quot;Noto Sans&quot;, &quot;Liberation Sans&quot;, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;" }}>
                                                                            <tspan id="SvgjsTspan1263">Nov</tspan>
                                                                            <title>Nov</title></text>
                                                                        <text id="SvgjsText1265" font-family="system-ui,-apple-system,&quot;Segoe UI&quot;,Roboto,&quot;Helvetica Neue&quot;,&quot;Noto Sans&quot;,&quot;Liberation Sans&quot;,Arial,sans-serif,&quot;Apple Color Emoji&quot;,&quot;Segoe UI Emoji&quot;,&quot;Segoe UI Symbol&quot;,&quot;Noto Color Emoji&quot;" x="696.3676759600639" y="225.52319938278197" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#1e293b" className="apexcharts-text apexcharts-xaxis-label apexcharts-xaxis-label" style={{ fontFamily: "system-ui, -apple-system, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, &quot;Noto Sans&quot;, &quot;Liberation Sans&quot;, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;" }}>
                                                                            <tspan id="SvgjsTspan1266">Dec</tspan>
                                                                            <title>Dec</title>
                                                                        </text>
                                                                    </g>
                                                                </g>
                                                                <g id="SvgjsG1284" className="apexcharts-yaxis-annotations"></g>
                                                                <g id="SvgjsG1285" className="apexcharts-xaxis-annotations"></g>
                                                                <g id="SvgjsG1286" className="apexcharts-point-annotations"></g>
                                                            </g>
                                                        </svg>
                                                        <div className="apexcharts-tooltip apexcharts-theme-light">
                                                            <div className="apexcharts-tooltip-title" style={{ fontFamily: "system-ui, -apple-system, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, &quot;Noto Sans&quot;, &quot;Liberation Sans&quot;, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 12px;" }}></div><div className="apexcharts-tooltip-series-group" style={{ order: "1" }}><span className="apexcharts-tooltip-marker" style={{ backgroundColor: "rgb(137, 87, 255)" }}></span>
                                                                <div className="apexcharts-tooltip-text" style={{ fontFamily: "system-ui, -apple-system, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, &quot;Noto Sans&quot;, &quot;Liberation Sans&quot;, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 12px;" }}><div className="apexcharts-tooltip-y-group"><span className="apexcharts-tooltip-text-y-label"></span>
                                                                    <span className="apexcharts-tooltip-text-y-value"></span>
                                                                </div>
                                                                    <div className="apexcharts-tooltip-goals-group">
                                                                        <span className="apexcharts-tooltip-text-goals-label"></span>
                                                                        <span className="apexcharts-tooltip-text-goals-value"></span>
                                                                    </div>
                                                                    <div className="apexcharts-tooltip-z-group">
                                                                        <span className="apexcharts-tooltip-text-z-label"></span>
                                                                        <span className="apexcharts-tooltip-text-z-value"></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light"><div className="apexcharts-yaxistooltip-text">
                                                        </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card"><div className="card-body pb-0">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div>
                                                <h5>Transaction History</h5>
                                            </div>
                                            <div className="hstack align-items-center">
                                                <a href="#" className="text-muted"><i className="bi bi-arrow-repeat"></i></a>
                                            </div>
                                        </div>
                                        <div className="list-group list-group-flush">
                                            <div className="list-group-item d-flex align-items-center justify-content-between gap-6">
                                                <div className="d-flex align-items-center gap-3">
                                                    <div className="icon icon-shape rounded-circle icon-sm flex-none w-rem-10 h-rem-10 text-sm bg-primary bg-opacity-25 text-primary"><i className="bi bi-send-fill"></i>
                                                    </div>
                                                    <div className="">
                                                        <span className="d-block text-heading text-sm fw-semibold">Bitcoin </span>
                                                        <span className="d-none d-sm-block text-muted text-xs">2 days ago</span>
                                                    </div>
                                                </div>
                                                <div className="d-none d-md-block text-sm">0xd029384sd343fd...eq23</div>
                                                <div className="d-none d-md-block">
                                                    <span className="badge bg-body-secondary text-warning">Pending</span>
                                                </div>
                                                <div className="text-end">
                                                    <span className="d-block text-heading text-sm fw-bold">+0.2948 BTC </span>
                                                    <span className="d-block text-muted text-xs">+$10,930.90</span>
                                                </div>
                                            </div>
                                            <div className="list-group-item d-flex align-items-center justify-content-between gap-6">
                                                <div className="d-flex align-items-center gap-3">
                                                    <div className="icon icon-shape rounded-circle icon-sm flex-none w-rem-10 h-rem-10 text-sm bg-primary bg-opacity-25 text-primary">
                                                        <i className="bi bi-send-fill"></i>
                                                    </div>
                                                    <div className="">
                                                        <span className="d-block text-heading text-sm fw-semibold">Cardano </span>
                                                        <span className="d-none d-sm-block text-muted text-xs">2 days ago</span>
                                                    </div>
                                                </div>
                                                <div className="d-none d-md-block text-sm">0xd029384sd343fd...eq23</div>
                                                <div className="d-none d-md-block"><span className="badge bg-body-secondary text-danger">Canceled</span></div>
                                                <div className="text-end"><span className="d-block text-heading text-sm fw-bold">+0.2948 BTC </span>
                                                    <span className="d-block text-muted text-xs">+$10,930.90</span>
                                                </div>
                                            </div>
                                            <div className="list-group-item d-flex align-items-center justify-content-between gap-6">
                                                <div className="d-flex align-items-center gap-3">
                                                    <div className="icon icon-shape rounded-circle icon-sm flex-none w-rem-10 h-rem-10 text-sm bg-primary bg-opacity-25 text-primary">
                                                        <i className="bi bi-send-fill"></i>
                                                    </div>
                                                    <div className="">
                                                        <span className="d-block text-heading text-sm fw-semibold">Binance </span>
                                                        <span className="d-none d-sm-block text-muted text-xs">2 days ago</span>
                                                    </div>
                                                </div>
                                                <div className="d-none d-md-block text-sm">0xd029384sd343fd...eq23</div>
                                                <div className="d-none d-md-block">
                                                    <span className="badge bg-body-secondary text-success">Successful</span>
                                                </div>
                                                <div className="text-end">
                                                    <span className="d-block text-heading text-sm fw-bold">+0.2948 BTC </span>
                                                    <span className="d-block text-muted text-xs">+$10,930.90</span>
                                                </div>
                                            </div>
                                            <div className="list-group-item d-flex align-items-center justify-content-between gap-6">
                                                <div className="d-flex align-items-center gap-3">
                                                    <div className="icon icon-shape rounded-circle icon-sm flex-none w-rem-10 h-rem-10 text-sm bg-primary bg-opacity-25 text-primary">
                                                        <i className="bi bi-send-fill"></i>
                                                    </div>
                                                    <div className="">
                                                        <span className="d-block text-heading text-sm fw-semibold">Bitcoin </span>
                                                        <span className="d-none d-sm-block text-muted text-xs">2 days ago</span>
                                                    </div>
                                                </div>
                                                <div className="d-none d-md-block text-sm">0xd029384sd343fd...eq23</div>
                                                <div className="d-none d-md-block">
                                                    <span className="badge bg-body-secondary text-warning">Pending</span>
                                                </div>
                                                <div className="text-end">
                                                    <span className="d-block text-heading text-sm fw-bold">+0.2948 BTC </span>
                                                    <span className="d-block text-muted text-xs">+$10,930.90</span>
                                                </div>
                                            </div>
                                            <div className="list-group-item d-flex align-items-center justify-content-between gap-6">
                                                <div className="d-flex align-items-center gap-3">
                                                    <div className="icon icon-shape rounded-circle icon-sm flex-none w-rem-10 h-rem-10 text-sm bg-primary bg-opacity-25 text-primary">
                                                        <i className="bi bi-send-fill"></i>
                                                    </div>
                                                    <div className="">
                                                        <span className="d-block text-heading text-sm fw-semibold">Bitcoin </span>
                                                        <span className="d-none d-sm-block text-muted text-xs">2 days ago</span>
                                                    </div>
                                                </div>
                                                <div className="d-none d-md-block text-sm">0xd029384sd343fd...eq23</div>
                                                <div className="d-none d-md-block">
                                                    <span className="badge bg-body-secondary text-danger">Canceled</span>
                                                </div>
                                                <div className="text-end">
                                                    <span className="d-block text-heading text-sm fw-bold">+0.2948 BTC </span>
                                                    <span className="d-block text-muted text-xs">+$10,930.90</span>
                                                </div>
                                            </div>
                                            <div className="list-group-item d-flex align-items-center justify-content-between gap-6">
                                                <div className="d-flex align-items-center gap-3">
                                                    <div className="icon icon-shape rounded-circle icon-sm flex-none w-rem-10 h-rem-10 text-sm bg-primary bg-opacity-25 text-primary">
                                                        <i className="bi bi-send-fill"></i>
                                                    </div>
                                                    <div className="">
                                                        <span className="d-block text-heading text-sm fw-semibold">Bitcoin </span>
                                                        <span className="d-none d-sm-block text-muted text-xs">2 days ago</span>
                                                    </div>
                                                </div>
                                                <div className="d-none d-md-block text-sm">0xd029384sd343fd...eq23</div>
                                                <div className="d-none d-md-block"><span className="badge bg-body-secondary text-success">Successful</span></div>
                                                <div className="text-end">
                                                    <span className="d-block text-heading text-sm fw-bold">+0.2948 BTC </span>
                                                    <span className="d-block text-muted text-xs">+$10,930.90</span>
                                                </div>
                                            </div>
                                            <div className="list-group-item d-flex align-items-center justify-content-between gap-6">
                                                <div className="d-flex align-items-center gap-3">
                                                    <div className="icon icon-shape rounded-circle icon-sm flex-none w-rem-10 h-rem-10 text-sm bg-primary bg-opacity-25 text-primary">
                                                        <i className="bi bi-send-fill"></i>
                                                    </div>
                                                    <div className="">
                                                        <span className="d-block text-heading text-sm fw-semibold">Bitcoin </span>
                                                        <span className="d-none d-sm-block text-muted text-xs">2 days ago</span>
                                                    </div>
                                                </div>
                                                <div className="d-none d-md-block text-sm">0xd029384sd343fd...eq23</div>
                                                <div className="d-none d-md-block">
                                                    <span className="badge bg-body-secondary text-success">Successful</span>
                                                </div>
                                                <div className="text-end"><span className="d-block text-heading text-sm fw-bold">+0.2948 BTC </span>
                                                    <span className="d-block text-muted text-xs">+$10,930.90</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-4">
                                < div className="offcanvas-xxl m-xxl-0 rounded-sm-4 rounded-xxl-0 offcanvas-end overflow-hidden m-sm-4" tabindex="-1" id="responsiveOffcanvas" aria-labelledby="responsiveOffcanvasLabel"><div className="offcanvas-header rounded-top-4 bg-light">
                                    <h5 className="offcanvas-title" id="responsiveOffcanvasLabel">Quick Stats</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#responsiveOffcanvas" aria-label="Close"></button>
                                </div>
                                    <div className="offcanvas-body d-flex flex-column p-3 p-sm-6 p-xxl-0 gap-3 gap-xxl-6">
                                        <div className="vstack gap-6 gap-xxl-6">
                                            <div className="card  border-xxl" style={{ border: "0.2px solid gray" }}>
                                                <div className="card-body d-flex flex-column p-0 p-xxl-6">
                                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                                        <div>
                                                            <h5>Balance</h5>
                                                        </div>
                                                        <div>
                                                            <span className="text-heading fw-bold">
                                                                <i className="bi bi-arrow-up me-2"></i>7.8%</span>
                                                        </div>
                                                    </div>
                                                    <div className="text-2xl fw-bolder text-heading ls-tight">23.863,21 USDT</div>
                                                    <div className="d-flex align-items-center justify-content-between mt-8">
                                                        <div className="">
                                                            <div className="d-flex gap-3 align-items-center">
                                                                <div className="icon icon-sm icon-shape text-sm rounded-circle bg-dark text-success">
                                                                    <i className="bi bi-arrow-down"></i>
                                                                </div>
                                                                <span className="h6 fw-semibold text-muted">Income</span>
                                                            </div>
                                                            <div className="fw-bold text-heading mt-3">$23.863,21 USD</div>
                                                        </div>
                                                        <span className="vr bg-dark bg-opacity-10"></span>
                                                        <div className="">
                                                            <div className="d-flex gap-3 align-items-center">
                                                                <div className="icon icon-sm icon-shape text-sm rounded-circle bg-dark text-danger">
                                                                    <i className="bi bi-arrow-up"></i>
                                                                </div>
                                                                <span className="h6 fw-semibold text-muted">Expenses</span>
                                                            </div>
                                                            <div className="fw-bold text-heading mt-3">$5.678,45 USD</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr className="my-0 d-xxl-none" />
                                            {/* <div className="card border-0 border-xxl">
                                                <div className="card-body p-0 p-xxl-6">
                                                    <div className="d-flex justify-content-between align-items-center mb-5">
                                                        <div>
                                                            <h5>Staking rewards</h5>
                                                        </div>
                                                        <div className="hstack align-items-center">
                                                            <a href="#" className="text-muted">
                                                                <i className="bi bi-arrow-repeat"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="vstack gap-1">
                                                        <div className="d-flex bg-body-secondary gap-3 rounded-3 p-4">
                                                            <div className="w-rem-8 h-rem-8 flex-none">
                                                                <img src="../../img/crypto/icon/ada.svg" alt="..." />
                                                            </div>
                                                            <div className="vstack gap-2">
                                                                <div className="d-flex mb-1">
                                                                    <div className="">
                                                                        <span className="d-block text-heading text-sm fw-semibold">Staked ADA</span>
                                                                        <span className="d-block text-muted text-xs">25% APR</span>
                                                                    </div>
                                                                    <div className="ms-auto d-block text-heading text-sm fw-semibold">1030 ADA</div>
                                                                </div>
                                                                <div className="progress bg-body-tertiary">
                                                                    <div className="progress-bar bg-primary" role="progressbar" aria-label="Basic example" style={{width:"70%"}} aria-valuenow="70" aria-valuemin="0"  aria-valuemax="100">
                                                                        </div>
                                                                        </div>
                                                                        </div>
                                                                        </div>
                                                        <div className="d-flex bg-body-secondary gap-3 rounded-3 p-4">
                                                            <div className="w-rem-8 h-rem-8 flex-none">
                                                                <img src="../../img/crypto/icon/eth.svg" alt="..." />
                                                            </div>
                                                            <div className="flex-fill vstack gap-2">
                                                                <div className="d-flex mb-1">
                                                                    <div className="">
                                                                        <span className="d-block text-heading text-sm fw-semibold">Staked ETH</span>
                                                                        <span className="d-block text-muted text-xs">16% APR</span>
                                                                    </div>
                                                                    <div className="ms-auto fw-bold text-heading text-sm">9.5 ETH</div>

                                                                </div>

                                                                <div className="progress bg-body-tertiary">

                                                                    <div className="progress-bar bg-primary" role="progressbar" aria-label="Basic example" style={{width:"50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex bg-body-secondary gap-3 rounded-3 p-4"><div className="w-rem-8 h-rem-8 flex-none">
                                                            <img src="../../img/crypto/icon/xrp.svg" alt="..." />
                                                        </div>
                                                            <div className="vstack gap-2">
                                                                <div className="d-flex mb-1">
                                                                    <div className="">
                                                                        <span className="d-block text-heading text-sm fw-semibold">Staked XRP</span>
                                                                        <span className="d-block text-muted text-xs">13% APR</span>
                                                                    </div>
                                                                    <div className="ms-auto d-block text-heading text-sm fw-semibold">760 XRP</div>
                                                                </div>
                                                                <div className="progress bg-body-tertiary">
                                                                    <div className="progress-bar bg-primary" role="progressbar" aria-label="Basic example" style={{width:"70%"}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> */}


                                            <div className="flex-fill w-100 card">
                                                <div className="card-header">
                                                    <div style={{display:'flex', justifyContent:'flex-end'}} className="card-actions float-right">
                                                        <span className="cursor-pointer mr-1">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline>
                                                                <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg></span>
                                                        <div className="d-inline-block dropdown">
                                                            <a aria-haspopup="true" className="" aria-expanded="false">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                                    <circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle>
                                                                    <circle cx="12" cy="19" r="1"></circle></svg>
                                                            </a>
                                                            <div tabindex="-1" role="menu" aria-hidden="true" className="dropdown-menu dropdown-menu-right">
                                                                <button type="button" tabindex="0" role="menuitem" className="dropdown-item">Action</button>
                                                                <button type="button" tabindex="0" role="menuitem" className="dropdown-item">Another Action</button>
                                                                <button type="button" tabindex="0" role="menuitem" className="dropdown-item">Something else here</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h5 className="mb-0 card-title">Customers</h5>
                                                    <span>Customers that buy products</span>
                                                </div>
                                                <div className="d-flex card-body">
                                                    <div className="align-self-center w-100">
                                                        <div className="py-3">
                                                            <div className="chart chart-xs">
                                                                <div className="chartjs-size-monitor">
                                                                    <div className="chartjs-size-monitor-expand">
                                                                        <div className="">
                                                                        </div>
                                                                    </div>
                                                                    <div className="chartjs-size-monitor-shrink">
                                                                        <div className="">
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <img style={{width:'100%'}} src={img} alt="" />
                                                                {/* <canvas height="400" width="518" style={{display: "block", height: "200px", width: "259px"}} className="chartjs-render-monitor"></canvas> */}
                                                            </div>
                                                        </div>
                                                        <table className="mb-0 table">
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <svg style={{width:'2vw'}} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle" className="svg-inline--fa fa-circle fa-w-16 text-primary" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                                            <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path>
                                                                        </svg> Chrome</td>
                                                                    <td className="text-right">4401</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <svg style={{width:'2vw'}} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle" className="svg-inline--fa fa-circle fa-w-16 text-warning" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                                            <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path>
                                                                        </svg> Firefox</td>
                                                                    <td className="text-right">4003</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <svg style={{width:'2vw'}} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle" className="svg-inline--fa fa-circle fa-w-16 text-danger" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                                            <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path>
                                                                        </svg> IE</td>
                                                                    <td className="text-right">1589</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>

                                            {/** */}
                                            <hr className="my-0 d-xxl-none" />
                                            <div className="card border-0 border-xxl" />
                                            <div className="card-body p-0 p-xxl-6">
                                                <div className="d-flex justify-content-between align-items-center mb-4">
                                                    <div>
                                                        <h5>Subscriptions</h5>
                                                    </div>
                                                    <div>
                                                        <span className="text-success fw-bold">
                                                            <i className="bi bi-arrow-up me-2"></i>7.8%</span>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-nowrap gap-2 scrollable-x">
                                                    <div className="flex-none">
                                                        <div className="rounded-3 p-3 p-sm-4 bg-body-secondary">
                                                            <div className="d-flex align-items-center gap-2">
                                                                <img style={{ width: '30%' }} src={img6} className="w-rem-5" alt="..." />
                                                                <h6 className="text-sm fw-semibold">Youtube</h6>
                                                            </div>
                                                            <div className="mt-4 fw-bold text-heading">$10.99</div>
                                                        </div>
                                                    </div>
                                                    <div className="flex-none">
                                                        <div className="rounded-3 p-3 p-sm-4 bg-body-secondary">
                                                            <div className="d-flex align-items-center gap-2">
                                                                <img style={{ width: '30%' }} src={img4} className="w-rem-5" alt="..." />
                                                                <h6 className="text-sm fw-semibold">Spotify</h6>
                                                            </div>
                                                            <div className="mt-4 fw-bold text-heading">$7.99</div>
                                                        </div>
                                                    </div>
                                                    <div className="flex-none">
                                                        <div className="rounded-3 p-3 p-sm-4 bg-body-secondary">
                                                            <div className="d-flex align-items-center gap-2">
                                                                <img style={{ width: '30%' }} src={img1} className="w-rem-5" alt="..." />
                                                                <h6 className="text-sm fw-semibold">GitHub</h6>
                                                            </div>
                                                            <div className="mt-4 fw-bold text-heading">$4.00</div>
                                                        </div>
                                                    </div>
                                                    <div className="flex-none">
                                                        <div className="rounded-3 p-3 p-sm-4 bg-body-secondary">
                                                            <div className="d-flex align-items-center gap-2">
                                                                <img src="../../img/social/slack.svg" className="w-rem-5" alt="..." />
                                                                <h6 className="text-sm fw-semibold">Slack</h6>
                                                            </div>
                                                            <div className="mt-4 fw-bold text-heading">$12.00</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="text-center mt-4">
                                                    <a href="#" className="link-primary fw-semibold text-sm">Manage subcriptions</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* </div> */}
                        {/* </main> */}
                    </div>
                </div >
            </div >
            {/* <div className="d-flex align-items-center gap-2 position-fixed bottom-0 end-0 mb-6 me-6 px-2 py-2 rounded-pill shadow-4 bg-white z-2">
                <img src="https://webpixels.s3.eu-central-1.amazonaws.com/public/brand/dark-sm.svg" className="avatar avatar-xs" />
                <a href="https://webpixels.io?ref=satoshi" className="me-1 text-heading fw-bold text-xs ls-tight stretched-link" target="_blank">Built by Webpixels</a>
            </div> */}
        </>
    )
}

export default Dashboard