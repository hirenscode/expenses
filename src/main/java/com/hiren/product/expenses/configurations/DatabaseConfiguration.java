package com.hiren.product.expenses.configurations;

//@Configuration
//@ConfigurationProperties("spring.datasource")
public class DatabaseConfiguration {

    private String url;
    private String driveClassName;
    private String username;
    private String password;

    // @Bean
    // @Profile("test")
    public String testDataSource() {
        System.out.println("URL " + url);
        System.out.println("ClassName " + driveClassName);
        return "Test Data Source in use";
    }

    // @Bean
    // @Profile("dev")
    public String devDataSource() {
        System.out.println("URL " + url);
        System.out.println("ClassName " + driveClassName);
        return "Dev Data Source in use";
    }

    // @Bean
    // @Profile("live")
    public String dataSource() {
        System.out.println("URL " + url);
        System.out.println("ClassName " + driveClassName);
        return "Live Data Source in use";
    }
}
