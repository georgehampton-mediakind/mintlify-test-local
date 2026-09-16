# Source: https://docs.mediakind.com/beam/web-interface/templates

# Manage templates

Templates are a set of parameters saved from an existing service configuration. This allows you to easily create new services that share the same settings.

You can create a template from an existing service configuration. The template is stored separately from the services. 
Service templates include:

- Constants: all parameters that are common to all services sharing the template.
- Variables: parameters that depend on the service.

Selecting a template when creating a service replaces the default settings with the template presets. It still requires entering missing variable information identified in the user interface.

You can export variables to a CSV file for mass configuration.

Changing a template requires:

- Changing the template name.
- Version management is implemented (can embed versions).

## Display templates

[Section titled “Display templates”](https://docs.mediakind.com/beam/web-interface/templates/#display-templates)

1. Click **Templates** from the left-side menu panel. If any, the available templates display in a table.

 ![view templates home controller](https://docs.mediakind.com/_astro/view_templates_home_controller.CLbc3t42_2pcOfE.webp)

2. You can edit the number of rows displayed or use the search bar to filter the display.

### Template parameters

[Section titled “Template parameters”](https://docs.mediakind.com/beam/web-interface/templates/#template-parameters)

| Column | Description |
| :-- | :-- |
| Name | Unique template name. |
| Processing Type | The service processing type. |
| No. of Services | Total number of services in your solution that are configured with the template. |
| Creation date | Template creation date (YYYY-MM-DD) and time (HH:MM:SS). |
| Actions | Export or delete. |

## Create a template

[Section titled “Create a template”](https://docs.mediakind.com/beam/web-interface/templates/#create-a-template)

To create a template, follow these steps:

1. [Display services](https://docs.mediakind.com/beam/web-interface/services#display-services).

2. Click ![Edit][base64-image] and ensure that service parameters comply to expected configurations.

3. From the **Services** page, Click the 3-vertical dots icon then select **Save as template**.

4. Enter a unique **Name** and click **Create**.

5. [Check that the template displays in the **Templates** table](https://docs.mediakind.com/beam/web-interface/templates/#display-templates).

6. You can [create a new service from the template](https://docs.mediakind.com/beam/web-interface/templates/#create-a-new-service-from-a-template).

## Delete a template

[Section titled “Delete a template”](https://docs.mediakind.com/beam/web-interface/templates/#delete-a-template)

**Deleting a template** has no impact on services created from that template.

To delete a template, follow these steps:

1. Display templates.

2. Click ![Delete][base64-image] in the **Actions** column.

3. Confirm the action if prompted. The template is deleted and no longer displays in the table.

## Create a new service from a template

[Section titled “Create a new service from a template”](https://docs.mediakind.com/beam/web-interface/templates/#create-a-new-service-from-a-template)

When creating a new service, you can apply a template to automatically insert existing service configuration parameters.

You **can edit any service settings**, even if the service was created from a template.

Before you start, [ensure a template already exists](https://docs.mediakind.com/beam/web-interface/templates/#display-templates).

1. Click **Services** in the left-side menu panel.

2. Click **Add service** then select a service type from the list to display options.

3. Next to the **Template** parameter, select a template from the list of available templates.

4. Click **Save**. The service is created and displays in the **Services** grid.

5. Click ![Edit][base64-image] to edit or to check the service configuration for accuracy.

## Export a template

[Section titled “Export a template”](https://docs.mediakind.com/beam/web-interface/templates/#export-a-template)

You can export templates to share them on different MediaKind Controllers.

1. [Display templates](https://docs.mediakind.com/beam/web-interface/templates/#display-templates).

2. Click ![button export template mfvp controller](https://docs.mediakind.com/_astro/button_export_template_mfvp_controller.Rlg1RIRp_1c8Mz1.webp) to export. The file is downloaded in relation to your web browser download settings.

The download date is in the downloaded file name. The date is in the following format: MM/DD/YYYY.

## Export a template variables form

[Section titled “Export a template variables form”](https://docs.mediakind.com/beam/web-interface/templates/#export-a-template-variables-form)

You can download template variables to use in massive configurations.

1. [Display templates](https://docs.mediakind.com/beam/web-interface/templates/#display-templates).

2. Click ![button export form template mfvp controller](https://docs.mediakind.com/_astro/button_export_form_template_mfvp_controller.CqKIy8Ji_2jU82g.webp) to export. A .csv file is downloaded in relation to your web browser download settings.

The download date is in the downloaded file name. The date is in the following format: MM/DD/YYYY.

## Import a template

[Section titled “Import a template”](https://docs.mediakind.com/beam/web-interface/templates/#import-a-template)

Before you start, ensure a template file exported from a different Controller environment is available.

1. [Display templates](https://docs.mediakind.com/beam/web-interface/templates/#display-templates).

2. Click **Actions**.

3. Select **Import template**.

 ![button actions import template mfvp controller](https://docs.mediakind.com/_astro/button_actions_import_template_mfvp_controller.Wpoyb6Ql_2uwujc.webp)

4. Click **Select file** to choose a file, then click **Import**.

 ![view import service mfvp controller](https://docs.mediakind.com/_astro/view_import_service_mfvp_controller.CjFRmJN5_ZsjlUO.webp)

 The template is uploaded and available in the **Templates** table.

- Template names must be unique.
- You are unable to import a template if the template with the same name already exists on this Controller.