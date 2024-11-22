"use client";

import { mailchimp } from '@/app/resources';
import { Button, Flex, Heading, Text, Background } from '@/once-ui/components'; // Removed Input import
import { useState } from 'react';
import { useTranslations } from 'next-intl';

function debounce<T extends (...args: any[]) => void>(func: T, delay: number): T {
    let timeout: ReturnType<typeof setTimeout>;
    return ((...args: Parameters<T>) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), delay);
    }) as T;
}

type NewsletterProps = {
    display: boolean;
    title: string | JSX.Element;
    description: string | JSX.Element;
};

export const Mailchimp = ({ newsletter }: { newsletter: NewsletterProps }) => {
    const [touched, setTouched] = useState<boolean>(false);
    const t = useTranslations();

    return (
        <Flex
            style={{ overflow: 'hidden' }}
            position="relative"
            fillWidth
            padding="xl"
            radius="l"
            marginBottom="m"
            direction="column"
            alignItems="center"
            align="center"
            background="surface"
            border="neutral-medium"
            borderStyle="solid-1">
            <Background
                position="absolute"
                mask={mailchimp.effects.mask as any}
                gradient={mailchimp.effects.gradient as any}
                dots={mailchimp.effects.dots as any}
                lines={mailchimp.effects.lines as any}
            />
            <Heading
                style={{ position: 'relative' }}
                marginBottom="s"
                variant="display-strong-xs">
                {newsletter.title}
            </Heading>
            <Text
                style={{
                    position: 'relative',
                    maxWidth: 'var(--responsive-width-xs)',
                }}
                wrap="balance"
                marginBottom="l"
                onBackground="neutral-medium">
                {newsletter.description}
            </Text>
            <form
                style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                }}
                action={mailchimp.action}
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form">
                <Flex
                    id="mc_embed_signup_scroll"
                    fillWidth
                    direction="column"
                    alignItems="center"
                    gap="8">
                    {/* Input is commented out */}
                    {/* 
                    <Input
                        formNoValidate
                        labelAsPlaceholder
                        id="mce-EMAIL"
                        name="EMAIL"
                        type="email"
                        label="Email"
                        required
                    />
                    */}
                    <Flex height="64" alignItems="center">
                        <Button
                            id="mc-embedded-subscribe"
                            value="Subscribe"
                            size="l" // Enlarged the button
                            style={{
                                fontSize: '1.2rem', // Adjusted text size
                                padding: '0.8rem 1.5rem', // Added padding
                                textAlign: 'center',
                                transition: 'all 0.3s ease', // Centered the button text
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.boxShadow = '0 0 30px rgba(86, 236, 173, 0.8)';
                                e.target.style.color = 'rgba(86, 236, 173, 0.8)';
                             
                                 // Glow effect on hover
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.boxShadow = '';
                                 e.target.style.color = ''; // Remove glow when not hovered
                            }}>
                            Contact Me
                        </Button>
                    </Flex>
                </Flex>
            </form>
        </Flex>
    );
};
