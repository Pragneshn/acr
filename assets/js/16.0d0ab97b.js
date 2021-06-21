(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{418:function(e,r,t){"use strict";t.r(r);var s=t(44),i=Object(s.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"azure-container-registry-troubleshooting-guide"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#azure-container-registry-troubleshooting-guide"}},[e._v("#")]),e._v(" Azure Container Registry - Troubleshooting guide")]),e._v(" "),t("h2",{attrs:{id:"i-get-an-error-while-creating-a-registry-unregistered-subscription-specified"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#i-get-an-error-while-creating-a-registry-unregistered-subscription-specified"}},[e._v("#")]),e._v(' I get an error while creating a registry - "Unregistered Subscription specified"')]),e._v(" "),t("p",[t("a",{attrs:{name:"registersub"}}),e._v("\nYou need to register the subscription using\nPowershell:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Register-AzureRmResourceProvider -ProviderNamespace Microsoft.ContainerRegistry \n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("Az CLI:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("az provider register –n Microsoft.ContainerRegistry \n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h2",{attrs:{id:"i-m-able-to-create-registry-in-one-region-but-not-in-another-region"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#i-m-able-to-create-registry-in-one-region-but-not-in-another-region"}},[e._v("#")]),e._v(" I'm able to create registry in one region but not in another region")]),e._v(" "),t("p",[e._v("As we add more regions, the service in new region needs to know about your subscription. So please register your subscription again so that ACR service in newer regions will know about your subscription")]),e._v(" "),t("p",[e._v("See "),t("a",{attrs:{href:"#registersub"}},[e._v("here")])]),e._v(" "),t("h2",{attrs:{id:"azure-cli-i-get-this-error-no-resource-with-type-microsoft-containerregistry-registries-can-be-found-with-name"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#azure-cli-i-get-this-error-no-resource-with-type-microsoft-containerregistry-registries-can-be-found-with-name"}},[e._v("#")]),e._v(" Azure CLI - I get this error - No resource with type Microsoft.ContainerRegistry/registries can be found with name")]),e._v(" "),t("p",[t("a",{attrs:{name:"setcorrectsub"}}),e._v("\nPlease run this command and check if you have set the right subscription")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("az account show\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("Please run this command to set the correct subscription")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("az account set --subscription <correct-subscription>\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h2",{attrs:{id:"azure-cli-not-able-to-use-az-cli-to-query-view-my-registries"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#azure-cli-not-able-to-use-az-cli-to-query-view-my-registries"}},[e._v("#")]),e._v(" Azure CLI - Not able to use az cli to query/view my registries")]),e._v(" "),t("p",[e._v("See "),t("a",{attrs:{href:"#registersub"}},[e._v("this")]),e._v(" and "),t("a",{attrs:{href:"#setcorrectsub"}},[e._v("this")])]),e._v(" "),t("h2",{attrs:{id:"image-exists-in-my-acr-but-docker-pull-returns-image-not-found"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#image-exists-in-my-acr-but-docker-pull-returns-image-not-found"}},[e._v("#")]),e._v(' Image exists in my ACR but, docker pull returns "image not found"')]),e._v(" "),t("p",[e._v("Please make sure you login before you pull/push repositories")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("docker login <yourregistry>.azurecr.io\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h2",{attrs:{id:"configuring-a-custom-domain-for-azure-container-registry"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configuring-a-custom-domain-for-azure-container-registry"}},[e._v("#")]),e._v(" Configuring a custom domain for azure container registry")]),e._v(" "),t("p",[e._v("Azure container registries have a typical login url of the format "),t("code",[e._v("*.azurecr.io")]),e._v(". A customer might like to use a custom domain for the registry. Follow "),t("RouterLink",{attrs:{to:"/custom-domain/"}},[e._v("this guide")]),e._v(" to achieve that.")],1),e._v(" "),t("h2",{attrs:{id:"moving-repositories-to-a-new-registry"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#moving-repositories-to-a-new-registry"}},[e._v("#")]),e._v(" Moving repositories to a new registry")]),e._v(" "),t("p",[e._v("To move your repositories to a newly created registry, follow "),t("RouterLink",{attrs:{to:"/move-repositories-to-new-registry/"}},[e._v("this guide")]),e._v(".")],1),e._v(" "),t("h2",{attrs:{id:"failed-to-add-a-virtual-network-from-a-different-azure-subscription"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#failed-to-add-a-virtual-network-from-a-different-azure-subscription"}},[e._v("#")]),e._v(" Failed to add a virtual network from a different Azure subscription")]),e._v(" "),t("p",[e._v("If you want to restrict registry access using a virtual network in a different Azure subscription, you will see the following error if the subscription hasn't registered the "),t("code",[e._v("Microsoft.ContainerRegistry")]),e._v(" resource provider:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Failed to save firewall and virtual network settings for container registry 'MyRegistry'. Error: Could not validate network rule - The client '00000000-0000-0000-0000-000000000000' with object id '00000000-0000-0000-0000-000000000000' does not have authorization to perform action 'Microsoft.Network/virtualNetworks/taggedTrafficConsumers/validate/action' over scope '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/MyRG/providers/Microsoft.Network/virtualNetworks/MyRegistry/taggedTrafficConsumers/Microsoft.ContainerRegistry' or the scope is invalid. If access was recently granted, please refresh your credentials.\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("You need to register the resource provider for Azure Container Registry in that subscription. For example:")]),e._v(" "),t("p",[e._v("Azure CLI")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("az account set --subscription <Name or ID of subscription of virtual network>\naz provider register --namespace Microsoft.ContainerRegistry\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("h2",{attrs:{id:"check-role-assignments-on-a-registry"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#check-role-assignments-on-a-registry"}},[e._v("#")]),e._v(" Check role assignments on a registry")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("az role assignment list --scope /subscriptions/<sub-id>/resourceGroups/<rg>/providers/Microsoft.ContainerRegistry/registries/<registryName>\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("See "),t("a",{attrs:{href:"https://docs.microsoft.com/cli/azure/role/assignment?view=azure-cli-latest#az-role-assignment-list",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(" for reference")])])}),[],!1,null,null,null);r.default=i.exports}}]);