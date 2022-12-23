<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* themes/gavias_kama/templates/page/page-layout/page--layout--fw.html.twig */
class __TwigTemplate_7f59a423af0dad01af0000fd825acd8663afc3a5dff3c715c9ecdbf1148ce26d extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $tags = ["include" => 8];
        $filters = [];
        $functions = [];

        try {
            $this->sandbox->checkSecurity(
                ['include'],
                [],
                []
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->getSourceContext());

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        // line 7
        echo "<div class=\"body-page\">
\t";
        // line 8
        $this->loadTemplate((($context["directory"] ?? null) . "/templates/page/parts/preloader.html.twig"), "themes/gavias_kama/templates/page/page-layout/page--layout--fw.html.twig", 8)->display($context);
        // line 9
        echo "\t";
        $this->loadTemplate((($context["directory"] ?? null) . "/templates/page/parts/message.html.twig"), "themes/gavias_kama/templates/page/page-layout/page--layout--fw.html.twig", 9)->display($context);
        // line 10
        echo "   ";
        $this->loadTemplate(($context["header_skin"] ?? null), "themes/gavias_kama/templates/page/page-layout/page--layout--fw.html.twig", 10)->display($context);
        // line 11
        echo "\t
   ";
        // line 12
        $this->loadTemplate((($context["directory"] ?? null) . "/templates/page/parts/before-content.html.twig"), "themes/gavias_kama/templates/page/page-layout/page--layout--fw.html.twig", 12)->display($context);
        // line 13
        echo "
\t<div role=\"main\" class=\"main main-page\">\t
\t\t<div id=\"content\" class=\"content content-full\">
\t\t\t<div class=\"container-full clearfix\">\t
\t\t\t\t";
        // line 17
        $this->loadTemplate((($context["directory"] ?? null) . "/templates/page/parts/main-no-sidebar.html.twig"), "themes/gavias_kama/templates/page/page-layout/page--layout--fw.html.twig", 17)->display($context);
        // line 18
        echo "\t\t\t</div>
\t\t</div>\t\t\t
\t</div>

\t";
        // line 22
        $this->loadTemplate((($context["directory"] ?? null) . "/templates/page/parts/after-content.html.twig"), "themes/gavias_kama/templates/page/page-layout/page--layout--fw.html.twig", 22)->display($context);
        // line 23
        echo "
\t";
        // line 24
        $this->loadTemplate((($context["directory"] ?? null) . "/templates/page/parts/panel.html.twig"), "themes/gavias_kama/templates/page/page-layout/page--layout--fw.html.twig", 24)->display($context);
        // line 25
        echo "
\t";
        // line 26
        $this->loadTemplate((($context["directory"] ?? null) . "/templates/page/footer.html.twig"), "themes/gavias_kama/templates/page/page-layout/page--layout--fw.html.twig", 26)->display($context);
        // line 27
        echo "
</div>

";
    }

    public function getTemplateName()
    {
        return "themes/gavias_kama/templates/page/page-layout/page--layout--fw.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  97 => 27,  95 => 26,  92 => 25,  90 => 24,  87 => 23,  85 => 22,  79 => 18,  77 => 17,  71 => 13,  69 => 12,  66 => 11,  63 => 10,  60 => 9,  58 => 8,  55 => 7,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "themes/gavias_kama/templates/page/page-layout/page--layout--fw.html.twig", "/var/www/drupal-oracle/themes/gavias_kama/templates/page/page-layout/page--layout--fw.html.twig");
    }
}
