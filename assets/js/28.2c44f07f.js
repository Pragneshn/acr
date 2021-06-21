(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{407:function(e,t,r){"use strict";r.r(t);var i=r(44),o=Object(i.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"acr-connected-registry-private-preview-instructions"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#acr-connected-registry-private-preview-instructions"}},[e._v("#")]),e._v(" ACR connected registry (Private Preview) instructions")]),e._v(" "),r("p",[e._v("This article provides guidance for use of the connected registry feature of Azure Container Registry (ACR) during the limited preview.")]),e._v(" "),r("p",[e._v("To request preview access, submit your contact details using this "),r("a",{attrs:{href:"https://forms.office.com/Pages/ResponsePage.aspx?id=v4j5cvGGr0GRqy180BHbR1OsLxas9SdIhfyFenqqkolUMkFKMTdDSU45SFQzU0o0WUNROVAySkRINy4u",target:"_blank",rel:"noopener noreferrer"}},[e._v("form"),r("OutboundLink")],1),e._v(" and we will get in touch with you.")]),e._v(" "),r("h2",{attrs:{id:"available-regions"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#available-regions"}},[e._v("#")]),e._v(" Available Regions")]),e._v(" "),r("p",[e._v("During limited preview period, the connected registry functionality is available in dedicated stamps in the following Azure regions:")]),e._v(" "),r("ul",[r("li",[e._v("Asia East")]),e._v(" "),r("li",[e._v("EU West")]),e._v(" "),r("li",[e._v("US East")])]),e._v(" "),r("p",[e._v("To use the connected registry functionality, your ACR must be deployed in one of the above three regions and in a supported deployment stamp. To check the stamp where your ACR is deployed to, use the following command:")]),e._v(" "),r("div",{staticClass:"language-azurecli line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("nslookup <your_registry_name>.azurecr.io\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("p",[e._v("The stamp name is one of the aliases returned by the above command. Currently, connected registries are supported in the following stamps:")]),e._v(" "),r("ul",[r("li",[e._v("East Asia: "),r("code",[e._v("ea-1.fe.azcr.io")])]),e._v(" "),r("li",[e._v("EU West: "),r("code",[e._v("weu-3.fe.azcr.io")])]),e._v(" "),r("li",[e._v("East US: "),r("code",[e._v("eus-2.fe.azcr.io")])])]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("IMPORTANT")]),e._v("\nIf your ACR doesn't have the above alias respective to your region, the connected registry functionality will not be available. You can create an issue as described below, and we will migrate your registry to the correct stamp.")])]),e._v(" "),r("h2",{attrs:{id:"known-limitations"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#known-limitations"}},[e._v("#")]),e._v(" Known Limitations")]),e._v(" "),r("p",[e._v("Here is a list of known limitations for the connected registry functionality in limited preview:")]),e._v(" "),r("ul",[r("li",[e._v("Number of tokens and scopemaps is limited to 20K for a single ACR. This indirectly limits the number of connected registries for an ACR registry because every connected registry needs a sync and client token.")]),e._v(" "),r("li",[e._v("Number of repository permissions in a scope map is limited to 500.")]),e._v(" "),r("li",[e._v("Number of clients for the connected registry is currently limited to 20.")]),e._v(" "),r("li",[e._v("Image locking through repository/manifest/tag metadata is not currently supported for connected registries.")]),e._v(" "),r("li",[e._v("Repository delete is not supported on the connected registry using registry mode.")]),e._v(" "),r("li",[e._v("Audit logs for connected registries are currently not supported.")]),e._v(" "),r("li",[e._v("Garbage collection of deleted artifacts on connected registries is currently not supported.")]),e._v(" "),r("li",[e._v("Connected registry is coupled with home region data endpoint and its automatic migration for geo replications is not supported.")]),e._v(" "),r("li",[e._v("Deletion of a connected registry needs manual removal of the containers on premises as well as removal of the respective scope map or tokens in the cloud.")]),e._v(" "),r("li",[e._v("Connected registry sync limitations are as follows:\n"),r("ul",[r("li",[e._v("For continuous sync:\n"),r("ul",[r("li",[r("code",[e._v("minMessageTtl")]),e._v(" is 1 day")]),e._v(" "),r("li",[r("code",[e._v("maxMessageTtl")]),e._v(" is 90 days")])])]),e._v(" "),r("li",[e._v("For occasionally connected scenarios, where you want to specify sync window:\n"),r("ul",[r("li",[r("code",[e._v("minSyncWindow")]),e._v(" is 1 hr")]),e._v(" "),r("li",[r("code",[e._v("maxSyncWindow")]),e._v(" is 7 days")])])])])])]),e._v(" "),r("h2",{attrs:{id:"set-up-and-configuration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#set-up-and-configuration"}},[e._v("#")]),e._v(" Set Up and Configuration")]),e._v(" "),r("p",[e._v("In limited preview, the connected registry targets IoT scenarios. Below are links to the preliminary documentation you can use to set up and configure the connected registry with your IoT Edge infrastructure.")]),e._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/preview/connected-registry/intro-connected-registry.html"}},[e._v("Overview of connected registry")])],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/preview/connected-registry/overview-connected-registry-access.html"}},[e._v("Understand access to a connected registry")])],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/preview/connected-registry/overview-connected-registry-and-iot-edge.html"}},[e._v("Using connected registry with Azure IoT Edge")])],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/preview/connected-registry/quickstart-connected-registry-cli.html"}},[e._v("Quickstart: Create a connected registry using Azure Container Registry CLI commands")])],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/preview/connected-registry/quickstart-deploy-connected-registry-iot-edge-cli.html"}},[e._v("Quickstart: Deploy a connected registry to an IoT Edge device")])],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/preview/connected-registry/quickstart-deploy-connected-registry-nested-iot-edge-cli.html"}},[e._v("Quickstart: Deploy a connected registry to an nested IoT Edge device")])],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/preview/connected-registry/quickstart-pull-images-from-connected-registry.html"}},[e._v("Quickstart: Pull images from a connected registry")])],1)]),e._v(" "),r("h2",{attrs:{id:"troubleshooting"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[e._v("#")]),e._v(" Troubleshooting")]),e._v(" "),r("p",[e._v("We keep a list of troubleshooting steps for known issues. Those are available on the "),r("RouterLink",{attrs:{to:"/preview/connected-registry/troubleshooting.html"}},[e._v("Troubleshooting")]),e._v(" page.")],1),e._v(" "),r("h2",{attrs:{id:"reporting-issues-and-asking-for-help"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#reporting-issues-and-asking-for-help"}},[e._v("#")]),e._v(" Reporting Issues and Asking for Help")]),e._v(" "),r("p",[e._v("To report issues, "),r("a",{attrs:{href:"https://github.com/Azure/acr/issues/new?assignees=toddysm&labels=connected-registry,bug&template=bug_report.md&title=",target:"_blank",rel:"noopener noreferrer"}},[e._v("create a new bug"),r("OutboundLink")],1),e._v(" in this repository.")]),e._v(" "),r("p",[e._v("If you need help with installation, set up, or use, you can "),r("a",{attrs:{href:"https://github.com/Azure/acr/issues/new?assignees=toddysm&labels=help%20wanted&template=bug_report.md&title=",target:"_blank",rel:"noopener noreferrer"}},[e._v("submit a help request"),r("OutboundLink")],1),e._v(" in this repository.")])])}),[],!1,null,null,null);t.default=o.exports}}]);