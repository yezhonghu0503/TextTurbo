package run.halo.search.widget;

import lombok.RequiredArgsConstructor;
import org.pf4j.PluginWrapper;
import org.springframework.stereotype.Component;
import org.springframework.util.PropertyPlaceholderHelper;
import org.thymeleaf.context.ITemplateContext;
import org.thymeleaf.model.IModel;
import org.thymeleaf.model.IModelFactory;
import org.thymeleaf.processor.element.IElementModelStructureHandler;
import reactor.core.publisher.Mono;
import run.halo.app.theme.dialect.TemplateHeadProcessor;

import java.util.Properties;

@Component
@RequiredArgsConstructor
public class StarterHeadProcessor implements TemplateHeadProcessor {

    static final PropertyPlaceholderHelper PROPERTY_PLACEHOLDER_HELPER = new PropertyPlaceholderHelper("${", "}");

    private final PluginWrapper pluginWrapper;

    @Override
    public Mono<Void> process(ITemplateContext context, IModel model,
                              IElementModelStructureHandler structureHandler) {
        final IModelFactory modelFactory = context.getModelFactory();
        model.add(modelFactory.createText(searchWidgetScript()));
        return Mono.empty();
    }

    private String searchWidgetScript() {

        final Properties properties = new Properties();
        properties.setProperty("version", pluginWrapper.getDescriptor().getVersion());

        // return PROPERTY_PLACEHOLDER_HELPER.replacePlaceholders("""
        //         <!-- PluginSearchWidget start -->
        //         <script src="/plugins/PluginSearchWidget/assets/static/search-widget.iife.js?version=${version}" async></script>
        // <script src="/plugins/pluginDev/assets/static/plugin-dev.js?version=${version}" async></script>
        //         <link rel="stylesheet" href="/plugins/PluginSearchWidget/assets/static/style.css?version=${version}" />
        //         <!-- PluginSearchWidget end -->
        //         """, properties);
        return PROPERTY_PLACEHOLDER_HELPER.replacePlaceholders("""
                <!-- dev_plugin start -->
                <script src="/plugins/PluginDev/assets/static/main.js?version=${version}" async></script>
                <!-- dev_plugin end -->
                """, properties);
    }
}